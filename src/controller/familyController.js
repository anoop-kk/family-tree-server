import treeLib from '../libs/tree';
async function getFamilyTree(request, response){
    let status = 200;
    let messge = "";
    let tree = await treeLib.generateTree();
    response.status(200).json({
        status,
        messge,
        tree
    })
}
export default {
    getFamilyTree
}