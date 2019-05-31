export const SelectLibrary =(libraryID)=>{
    return{
        type:'selected_library',
        payload:libraryID
    }
}