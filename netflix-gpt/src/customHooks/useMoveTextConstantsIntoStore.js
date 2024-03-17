import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { lang } from "../constants/lang";
import { addTextConstants } from "../store/slices/multiLangSlice";

const useMoveTextConstantsIntoStore = () => {
  const dispatch = useDispatch();
  const areLangsInStore = useSelector(
    (state) => state.multiLang?.textConstants
  );

  useEffect(() => {
    if (!areLangsInStore) {
      dispatch(addTextConstants(lang));
    }
  }, []);
};
export default useMoveTextConstantsIntoStore;
