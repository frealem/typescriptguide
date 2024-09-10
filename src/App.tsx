import Private from "./component/auth/private";
import Profile from "./component/auth/profile";
import ButtonCustom from "./component/button";
import ChildProp from "./component/childProps";
import Componenter from "./component/component";
import Container from "./component/container";
import Generic1 from "./component/Generic/generic";
import { Greet, ListName } from "./component/greet";
import HtmlElement from "./component/htmlReactElement";
import InputCustom from "./component/input";
import LastProp from "./component/lastProp";
import ToastPosition from "./component/literal/toastPosition";
import Person from "./component/person";
import { ThemeContextProvider } from "./component/themeContext";
import UseTheme from "./component/useTheme";
import CustomButton from "./customButton";
// import { personProps } from "./component/person.types";

function App() {
const info={
    name:{
      firstname:'chala',
lastname:'chube'
    },
    date:{
      day:1,
      month:2,
      year:"2002"
    }
  }

  const nameList=[
  {first:'frealem',
  last:'Tekalign'},
  {first:'frealem1',
    last:'Tekalign1'},
    {first:'frealem2',
      last:'Tekalign2'},
  ]

  const numberList = [1, 2, 3, 4, 5];
  const stringList = ['Apple', 'Banana', 'Cherry'];

  return (
    <div className="App">
     <Greet name={info.name} date={info.date}/>
     <ListName names={nameList}/>
     <LastProp status='success'/><Componenter>
     <ChildProp>this to check compo prop</ChildProp></Componenter>
     <ButtonCustom handleClick={(event,id)=>{
      console.log('Button clicked',event,id)
     }}/>
     <InputCustom value='' handleChange={(event)=>{console.log(event)}}/>
     <Container styles={{display:'flex',backgroundColor:'blue',width:40, height:40}}/>

     <Person first='chala' last='keven' age={23}/>
<ThemeContextProvider>
  <UseTheme/>
</ThemeContextProvider>
<Private isLogin={true} component={Profile}/>

<Generic1 
items={numberList}
render={(item)=><span>{item}</span>}/>

{/* to make custom position style */}

<ToastPosition position="center"/>

{/* to make custom button */}

<CustomButton variant='Primary'>i am custom</CustomButton>

{/* to use any html element and react elements */}

<HtmlElement as="label" color='Secondary'  htmlFor="someId">
my label here
</HtmlElement>
    </div>
  );

}

export default App;
