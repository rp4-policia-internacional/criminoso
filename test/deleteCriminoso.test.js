import DeleteCriminosoServece from '../src/modules/criminoso/services/DeleteCriminosoService.ts'

describe('Teste: Deletar criminoso', () =>{
    it('Testando a excluisão de criminoso', () => {
      var id = "44c6a91a-a137-4c32-adb6-52f863d1590c"

      const teste = new DeleteCriminosoServece(id)
      const retur = new DeleteCriminosoServece(
        " "," "," "," "," "," "," "," "," "," "," "," "," "," ",
        )
      expect(retur).toEqual(teste)
    })
})