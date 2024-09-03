import { createPageClap, getPageClap, incrementClap } from "@services/clap";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

function Clap() {
  const [clapCount, setClapCount] = useState(0);
  const { pathname } = useRouter();

  useEffect(() => {
    const fetchClapData = async () => {
      try {
        const pageClap = await getPageClap(pathname);
        if (pageClap) {
          setClapCount(pageClap.clap_count);
        }

        if (!pageClap) {
          await createPageClap({
            slug: pathname,
            clap_count: 0,
            last_clapped_at: new Date().toISOString(),
          });
        }
      } catch (error) {
        console.error("Error fetching clap data:", error);
      }
    };

    fetchClapData();
  }, [pathname]);

  const handleClap = useCallback(async () => {
    try {
      setClapCount((prev) => prev + 1);
      await incrementClap(pathname);
    } catch (error) {
      console.error("Error incrementing clap:", error);
    }
  }, [pathname]);

  return (
    <div className="mt-4">
      <button onClick={handleClap}>
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined">waving_hand</span>
          <span>{clapCount}</span>
        </div>
      </button>
    </div>
  );
}

export default React.memo(Clap);