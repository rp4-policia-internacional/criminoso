import FindOneCriminosoService from '../src/modules/criminoso/services/FindOneCriminosoService.ts'

describe('Teste: Get um criminoso', () =>{
    it('Testando a get de criminoso', () => {
      var id = "44c6a91a-a137-4c32-adb6-52f863d1590c"

      const teste = new FindOneCriminosoService(id)
      const retur = new FindOneCriminosoService(
        "44c6a91a-a137-4c32-adb6-52f863d1590c",
        "Sabrina Rodrigues Fernandes",
        "Tatuagem no braço",
        "Binna",
        "2023-09-05",
        "1.64",
        "21",
        "M",
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