import CreateOrganizacaoServece from '../src/modules/organizacao/services/CreateOrganizacaoService'

describe('Teste: Criar organização', () =>{
    it('Testando a criação da organização', () => {
      var id = "44c6a91a-a137-4c32-adb6-52f86gd1590c"
      var nome="Mafia Russa"
      var lider = "44c6a91a-a137-4c32-adb6-52f863d1590c"
      var descricao = "Os mafiosos lidam com drogas e bandidos"
      var sigla ="MfRss"
      

      const teste = new CreateOrganizacaoServece(id,nome,lider,descricao,sigla)
      const retur = new CreateOrganizacaoServece(
        "44c6a91a-a137-4c32-adb6-52f86gd1590c",
        "Mafia Russa",
        "44c6a91a-a137-4c32-adb6-52f863d1590c",
        "Os mafiosos lidam com drogas e bandidos",
        "MfRss"
        )
      expect(retur).toEqual(teste)
    })
})