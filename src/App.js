import logo from "./logo.svg";
import Greet, { GreetAgain } from "./Components/Greet";
import HookCounter from "./Components/HookCounter";
import UseStateHook2 from "./Components/UseStateHook2";

import HookCounter3 from "./Components/HookCounter3";

import HookCounter4 from "./Components/HookCounter4";

import UseEffectHook1 from "./Components/UseEffectHook1";

import UseEffect2 from "./Components/UseEffect2";

import UseEffect3 from "./Components/UseEffect3";

import UseEffect4 from "./Components/UseEffect4";
import UseState1 from "./Trial.js/UseState1";
import UseState2 from "./Trial.js/UseState2";

import FirstComponent from "./Components/ContextHooks/FirstComponent";

import ComponentOne from "./Components/HookContext/ComponentOne";
import ProfileState from "./Components/HookContext/ProfileState";
import UseRdeucer from "./Components/UseRdeucer";

import ParentComponent from "./Components/UseCallBack/Parent";

import FocusInput from "./Components/UseRefHook/FocusInput";
import HookTImer from "./Components/UseRefHook/HookTImer";

import Parent from "./Components/ImperativeHandleHook/Parent";
import LayoutEffect2 from "./Components/UseLayoutEffect/LayoutEffect2";
import SampleWebPage from "./SampleWebPage";
/* import UseDebug from "./Components/UseDebug"; */

function App() {
  /* function GreetParent(name) {
    alert("Greetings To The Parent Component from " + name)
  } */

  return (
    <div>
      {/* Children Props*/}
      {/* <Greet name = "Bruce">
        <p>
          I am a child of component 1
        </p>
      </Greet>

      <Greet name = "John">
        <button>
          Click On Me
        </button>
      </Greet>

      <Greet name = "Clark"/> */}
      {/* Children Props */}

      {/* <Greet name = "Bruce" Age = {20} greetParent = {GreetParent}/>
      <Greet name = "Alex" Age = {30} greetParent = {GreetParent}/>
      <Greet name = "Jordan" Age = {40} greetParent = {GreetParent}/> */}

      {/* <HookCounter startFrom = {1}/> */}

      {/* <UseStateHook2/> */}

      {/* <HookCounter3/> */}

      {/* <HookCounter4/> */}

      {/* <UseEffectHook1/> */}

      {/* <UseEffect2/> */}

      {/* <UseEffect3/> */}

      {/* <UseEffect4/> */}

      {/* <ParentComponent/> */}

      {/* <ProfileState>
          <ComponentOne />
      </ProfileState> */}

      {/* <UseRdeucer/> */}

      {/* <ParentComponent/> */}

      {/* <FocusInput/> */}

      {/* <Parent/> */}
      
      {/* <UseDebug/> */}

      <SampleWebPage/>
    </div>
  );
}

export default App;
