import { createAsyncAction } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import { AxiosError } from "axios";

// 액션 함수
export const GET_USER_PROFILE = "github/GET_USER_PROFILE"; //요청 시작시 디스패치
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS"; // 요청 성공시 디스패치
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR"; // 요청 실패시 디스패치

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();
