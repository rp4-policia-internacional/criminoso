import ListCriminosoService from '../src/modules/criminoso/services/ListCriminosoService'

describe('Teste: Listar criminosos', () =>{
    it('Testando a listagem de criminosos', () => {
      var id
      var nomeCompleto
      var caracteristicas
      var apelido
      var dataNascimento
      var altura
      var idade
      var genero
      var foto
      var genero
      var id_paisVistoPorUltimo
      var status
      var id_pais_origem
      var id_organizacao

      const teste = new ListCriminosoService(id,nomeCompleto,caracteristicas,apelido,dataNascimento,altura,idade,genero,foto,genero,id_paisVistoPorUltimo,status,id_pais_origem,id_organizacao)
      const retur = new ListCriminosoService(id,nomeCompleto,caracteristicas,apelido,dataNascimento,altura,idade,genero,foto,genero,id_paisVistoPorUltimo,status,id_pais_origem,id_organizacao)      
      expect(retur).toEqual(teste)
    })
})