import CreateCriminosoServece from '../src/modules/criminoso/services/CreateCriminosoServece'

describe('Teste: Criar criminoso', () =>{
    it('Testando a criação de criminoso', () => {
      var id = "44c6a91a-a137-4c32-adb6-52f863d1590c"
      var nomeCompleto ="Sabrina Rodrigues Fernandes"
      var caracteristicas = "Tatuagem no braço"
      var apelido = "Binna"
      var dataNascimento ="2023-09-05"
      var altura = "1.64"
      var idade = "21"
      var foto = "sabrina.png"
      var genero = "F"
      var id_paisVistoPorUltimo = "pais visto por ultimo"
      var status = "Foragido"
      var id_pais_origem = "44c6a91a-a137-4c32-adb6-52f863d1590a"
      var id_organizacao = "44c6a91a-a137-4c32-adb6-52f863d1590b"

      const teste = new CreateCriminosoServece(id,nomeCompleto,caracteristicas,apelido,dataNascimento,altura,idade,genero,foto,genero,id_paisVistoPorUltimo,status,id_pais_origem,id_organizacao)
      const retur = new CreateCriminosoServece(
        "44c6a91a-a137-4c32-adb6-52f863d1590c",
        "Sabrina Rodrigues Fernandes",
        "Tatuagem no braço",
        "Binna",
        "2023-09-05",
        "1.64",
        "21",
        "sabrina.png",
        "F",
        "pais visto por ultimo",
        "Foragido",
        "44c6a91a-a137-4c32-adb6-52f863d1590a",
        "44c6a91a-a137-4c32-adb6-52f863d1590b",
        )
      expect(retur).toEqual(teste)
    })
})