import ManageItem from "./ManageItem";

const ManageList = ({manageList}) => {
 
    return (
    <div className="Manage-inner ManageList">
      {manageList.map((item) => (
        <ManageItem key={item.id} {...item} />
        
      )) }
      
    </div>
  )
};

/*
ManageList.defaultProps={
  manageList:[]
}
*/

export default ManageList;
