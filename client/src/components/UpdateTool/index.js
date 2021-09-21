// import { Inputs, TextArea, FormBtn } from "../../components/Form";
// import { List, ListItem } from "../../components/List";
import { ListItem } from "../../components/List";



export default function UpdateTool({tool, handleAvailableChange}){

//changes tool availability array individually
    function handleChange(event){
        const check =event.target.checked;
        // console.log("i updated")
        handleAvailableChange(tool.id, check)
    }

return(
    <ListItem title="updateListItem">
      {/* create modal(s) or page(s) for tool.id, then uncomment the anchor element */}
    {/* <a href={"/tools/" + tool.id}> */}
      <strong style={{color:"black"}}>
        Name: {tool.name}
      </strong>
      <strong style={{color:"purple"}}>
       | Available: {tool.available.toString()}
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
    name="available"
    placeholder="true if available false if not"
    value={formObject.available}
  /> */}
    <input type="checkbox"
    onChange={handleChange}
    // defaultChecked={tool.available}
    checked ={tool.available}
    />

 
  {/* </form> */}

    {/* <DeleteBtn onClick={() => handleFormSubmit(tool.id)} /> */}
  </ListItem>
)
}