const ManageItem = ({food, kcal, date }) => {
    return(
        <div>
         <p>{food} {kcal} {new Date(date).toLocaleDateString()}</p>
        </div>
    )
}

export default ManageItem;