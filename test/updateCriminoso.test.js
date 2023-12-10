import UpdateCriminosoService from '../src/modules/criminoso/services/UpdateCriminosoService'

describe('Teste: Update da criminoso', () =>{
  it('Testando a atualização do criminoso', () => {
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

    const teste = new UpdateCriminosoService(id,nomeCompleto,caracteristicas,apelido,dataNascimento,altura,idade,genero,foto,genero,id_paisVistoPorUltimo,status,id_pais_origem,id_organizacao)
    const retur= new UpdateCriminosoService(
        "44c6a91a-a137-4c32-adb6-52f863d1590c",
        "Sabrina Fernandes",
        "Tatuagem no pescoço",
        "Binna",
        "2023-02-05",
        "1.64",
        "29",
        "sabrina.png",
        "F",
        "pais visto por ultimo",
        "Foragido",
        "44c6a91a-a137-4c32-adb6-52f863d1590a",
        "44c6a91a-a137-4c32-adb6-52f863d1590b",)
    expect(retur).not.toBe(teste)
  })
})