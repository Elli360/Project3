// import { Inputs, TextArea, FormBtn } from "../../components/Form";
// import { List, ListItem } from "../../components/List";
import { ListItem } from "../List";



export default function UpdateTool({tool, handleBorrowedChange}){

//changes tool availability array individually
    function handleChange(event){
        const check =event.target.checked;
        // console.log("i updated")
        handleBorrowedChange(tool.id, check)
    }

return(
    <ListItem title="updateListItem">
      {/* create modal(s) or page(s) for tool.id, then uncomment the anchor element */}
    {/* <a href={"/tools/" + tool.id}> */}
      <strong style={{color:"black"}}>
        Name: {tool.name}
      </strong>
      <strong style={{color:"purple"}}>
       | Borrowed: {tool.borrowed.toString()}
      </strong>
      
    {/* </a> */}
    
    {/* <input
    type='text'
    onChange={(e)=> {
    setTools(e.target.value)
    }
    }>

    </input> */}
    {/* <form > */}
    {/* <Inputs 
    onChange={handleInputChange}
    name="borrowed"
    placeholder="true if borrowed false if not"
    value={formObject.borrowed}
  /> */}
    <input type="checkbox"
    onChange={handleChange}
    // defaultChecked={tool.borrowed}
    checked ={tool.borrowed}
    />

 
  {/* </form> */}

    {/* <DeleteBtn onClick={() => handleFormSubmit(tool.id)} /> */}
  </ListItem>
)
}