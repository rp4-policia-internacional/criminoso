import UpdateOrganizacaoService from '../src/modules/organizacao/services/UpdateOrganizacaoService'

describe('Teste: Update da criminoso', () =>{
  it('Testando a atualização do criminoso', () => {
      var id = "44c6a91a0c"
      var nome="Mafia Russa"
      var lider = "44c6a91a-a137-4c32-adb6-52f863d1590c"
      var descricao = "Os mafiosos lidam com drogas e bandidos"
      var sigla ="MfRss"

    const teste = new UpdateOrganizacaoService(id,nome,lider,descricao,sigla)
    const retur= new UpdateOrganizacaoService(
        "44c6a91a0c",
        "Mafia Italiana",
        "44c6a91a-a137-4c32-adb6-52f863d1590c",
        "Os mafiosos lidam com drogas e bandidos",
        "MfRss"
        )
    expect(retur).not.toBe(teste)
  })
})