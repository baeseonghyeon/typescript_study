import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { GithubAction } from "./types";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./actions";

// ThunkAction 의 Generics 로는 다음 값들을 순서대로 넣어주어야 합니다. <TReturnType, TState, TExtraThunkArg, TBasicAction>
export function getUserProfileThunk(
  username: string
): ThunkAction<void, RootState, null, GithubAction> {
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
