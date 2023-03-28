import api from "../api";

export async function pegarRepositoriosdoUsuario(id){
    try{
        const resultado = await api.get(`/repos?postId=${id}`);
        return resultado.data
    }
    catch(error){
        console.log(error)
        return[]
    }
}

export async function salvarRepositoriosdoUsuario(postId, nome, data, id){
    try{
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId
        });
        return 'sucesso'
    }
    catch(error){
        console.log(error)
        return 'erro'
    }
}

export async function criarRepositoriosdoUsuario(postId, nome, data){
    try{
        await api.post(`/repos`, {
            name: nome,
            data: data,
            postId: postId
        });
        return 'sucesso'
    }
    catch(error){
        console.log(error)
        return 'erro'
    }
}

export async function deletarRepositoriosdoUsuario(id){
    try{
        await api.delete(`/repos/${id}`);
        return 'sucesso'
    }
    catch(error){
        console.log(error)
        return 'erro'
    }
}