import { WavingHandOutlined } from "@mui/icons-material";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAndCreatePageClap } from "../../services/clap";
import { clapSelector } from "../../store/claps/selector";
import { getClaps, incrementClap } from "../../store/claps/slice";


function Clap() {
  const { pathname } = useRouter();
  const clap = useSelector(clapSelector(pathname));
  const dispatch = useDispatch();

  const handleClap = async () => {
    dispatch(incrementClap(pathname));
  };

  React.useEffect(() => {
    const init = async () => {
      const isCreate = await checkAndCreatePageClap(pathname);

      if (isCreate) {
        dispatch(getClaps(undefined));
      }
    }

    init();
  }, [])

  return (
    <div className="mt-4">
      <button onClick={handleClap}>
        <div className="flex items-center gap-1">
          <WavingHandOutlined />
          <span>{clap?.clap_count || 0}</span>
        </div>
      </button>
    </div>
  );
}

export default React.memo(Clap);