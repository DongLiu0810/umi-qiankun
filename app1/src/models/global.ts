import { Effect, Reducer } from 'umi';
import actions from '../shared/acrions';
// import { getUserInfo } from '@/apis/user';

export interface GlobalModelState {
  userInfo: Record<string, any>;
}

export interface GlobalModelType {
  namespace: 'globalModel';
  state: GlobalModelState;
  effects: {
    getUserInfo: Effect;
    initial: Effect;
  };
  reducers: {
    save: Reducer<GlobalModelState>;
  };
}

const globalModel: GlobalModelType = {
  namespace: 'globalModel',
  state: {
    // 登录账户信息
    userInfo: {},
  },
  effects: {
    *initial({ payLoad = {} }, { put }) {
      yield put({ type: 'getUserInfo' });
    },
    // 获取个人信息
    *getUserInfo({ payLoad = {} }, { call, put }) {
      //获取用户信息
      // const { data, status } = yield call(getPersonalInfo);
      //保存用户信息
      yield put({
        type: 'save',
        payload: { userInfo: { id: 1, name: 'test' } },
      });
      //父应用更改GlobalState
      actions.setGlobalState({ token: '123456789' });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default globalModel;
