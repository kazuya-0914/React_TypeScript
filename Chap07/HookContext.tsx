import { createContext } from 'react';
import { HookContextChild } from './HookContextChild';

type ConfigType = {
  title: string;
  lang: string;
};

export const MyAppContext = createContext<ConfigType>({
  title: '',
  lang: '',
});

const config = {
  title: 'React入門',
  lang: 'ja-JP',
};

export default function Hook() {
  return (
    <MyAppContext.Provider value={config}>
      <div id="c_main">
        <HookContextChild />
      </div>
    </MyAppContext.Provider>
  );
}