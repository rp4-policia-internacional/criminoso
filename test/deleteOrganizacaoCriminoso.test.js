import DeleteOrganizacaoService from '../src/modules/organizacao/services/DeleteOrganizacaoService'

describe('Teste: Delete da organização', () =>{
    it('Testando a exclusao da organização', () => {
      var id = "44c6a91a-a137-4c32-adb6-52f86gd1590c"

      const teste = new DeleteOrganizacaoService(id)
      const retur = new DeleteOrganizacaoService(
        " "," "," "," "," "
        )
      expect(retur).toEqual(teste)
    })
})