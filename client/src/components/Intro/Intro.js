
import {Button} from "reactstrap";


function Intro(){
    return(
        <div>
        <h1 className="text-white">
        Welcome to the ToolShed! <br />
        <span className="text-white"></span>
      </h1>
      <p className="text-white mb-3">
        Where you can add, edit and LOAN tools from your inventory.
        Where you can search for NEW tools and borrow from other users' inventories!...
      </p>
      <div className="btn-wrapper mb-3">
        <p className="category text-success d-inline">
          Open the door to add to your ToolShed 
        </p>


        <Button
          className="btn-link"
          color="success"
          href="/AllCard"
          onClick={(e) => e.preventDefault()}
          size="sm"
        >
          <i className="tim-icons icon-minimal-right" />
        </Button>
      </div>
      </div>
    )
}

export default Intro;