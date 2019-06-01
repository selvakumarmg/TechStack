export const SelectLibrary =(libraryId)=>{
    return{
        type:'selected_library',
        payload:libraryId
    };
};