import axios from "axios";
import {
  hasError,
  getAllNotice,
  startLoading,
  updateNotice,
  deleteNotice,
  createNotice,
} from "../../redux/newsNotices/newsNoticeSlice";
import { handleError } from "../../utils/handleError";
// import { api } from "../api";

export const fetchNewsNotice = () => async (dispatch) => {
  dispatch(startLoading());
  await axios
    .get("http://192.168.27.87:3000/product/")
    .then((response) => {
      dispatch(getAllNotice(response.data));
    })
    .catch((error) => {
      dispatch(hasError(handleError(error)));
    });
};

export const fetchAddNewsNotice = (params) => async (dispatch) => {
  dispatch(startLoading());
  await axios
    .post("http://192.168.27.87:3000/product/create", params)
    .then((response) => {
      dispatch(createNotice(response.data));
    })
    .catch((error) => {
      dispatch(hasError(handleError(error)));
    });
};

export const fetchUpdateNewsNotice = (id, params) => async (dispatch) => {
  dispatch(startLoading());
  await axios
    .put("http://192.168.27.87:3000/product/update/?productID=" + id, params)
    .then((response) => {
      dispatch(updateNotice(response.data));
    })
    .catch((error) => {
      dispatch(hasError(handleError(error)));
    });
};

export const fetchDelateNewsNotice = (id) => async (dispatch) => {
  dispatch(startLoading());
  await axios
    .delete("http://192.168.27.87:3000/product/delete/?productID=" + id)
    .then((response) => {
      dispatch(deleteNotice(response.data));
    })
    .catch((error) => {
      dispatch(hasError(handleError(error)));
    });
};
