import { Inputs, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";



export default function UpdateTool({tool, handleAvailChange}){


    function handleChange(event){
        const check =event.target.checked;
        console.log("i updated")
        handleAvailChange(tool.id, check)
    }

return(
    <ListItem>
    <a href={"/tools/" + tool.id}>
      <strong>
        Name: {tool.name}
      </strong>
      <strong>
       | Available: {tool.available.toString()}
      </strong>
      
    </a>
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
    defaultChecked={tool.available}
    />

 
  {/* </form> */}

    {/* <DeleteBtn onClick={() => handleFormSubmit(tool.id)} /> */}
  </ListItem>
)
}