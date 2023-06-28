describe('Api', () => {
  const poke = 'zubat'
  it('Check pokemon info', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/'+poke).then(
      (response)=>{
        expect(response.body).to.have.property('id',41)
        expect(response.body).to.have.property('height',8)
        expect(response.body).to.have.property('weight',75)
      })  
  })
  it('Check pokemon stats', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/'+poke).then(
      (response)=>{
        expect(response.body.stats[0].stat).to.have.property('name','hp')
        expect(response.body.stats[0]).to.have.property('base_stat',40)

        expect(response.body.stats[1].stat).to.have.property('name','attack')
        expect(response.body.stats[1]).to.have.property('base_stat',45)

        expect(response.body.stats[2].stat).to.have.property('name','defense')
        expect(response.body.stats[2]).to.have.property('base_stat',35)

        expect(response.body.stats[3].stat).to.have.property('name','special-attack')
        expect(response.body.stats[3]).to.have.property('base_stat',30)

        expect(response.body.stats[4].stat).to.have.property('name','special-defense')
        expect(response.body.stats[5]).to.have.property('base_stat',55)
      })  
    })
    it('Check pokemon types', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/'+poke).then(
        (response)=>{
          expect(response.body).to.have.property('name',poke),
          expect(response.body.types[0].type).to.have.property('name','poison')
          expect(response.body.types[1].type).to.have.property('name','flying')
        })  
    })
})