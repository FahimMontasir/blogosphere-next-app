export interface DBThemeContextProps {
  currentColor: string;
  currentMode: string;
  activeMenu: boolean;
  screenSize: number | undefined;
  setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
  handleClick: (clicked: string) => void;
  isClicked: typeof initialState;
  initialState: typeof initialState;
  setIsClicked: React.Dispatch<
    React.SetStateAction<{
      chat: boolean;
      cart: boolean;
      userProfile: boolean;
      notification: boolean;
    }>
  >;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentColor: React.Dispatch<React.SetStateAction<string>>;
  setCurrentMode: React.Dispatch<React.SetStateAction<string>>;
  setMode: (e: React.FocusEvent<HTMLInputElement>) => void;
  setColor: (color: string) => void;
  themeSettings: boolean;
  setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
}
