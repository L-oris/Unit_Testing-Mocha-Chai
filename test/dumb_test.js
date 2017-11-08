const {expect,assert} = require('chai')

function titleCase(title){
  return title
  .split(' ')
  .map(word=>word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ')
}


describe('Mocha', function(){

  //SANITY CHECK
  it('should run our tests using npm', function(){
    expect(true).to.be.ok   //-->should not raise errors
  })
})


describe('titleCase()', function(){

  it('should return a string', function(){
    assert.typeOf(titleCase('jerry the mouse'),'string')
    //expect(titleCase('jerry the mouse')).to.be.a('string')
  })

  it('should capitalize a letter', function(){
    assert.equal(titleCase('a'),'A')
    //expect(titleCase('a')).to.equal('A')
  })

  it('should capitalize the first letter of a word', function(){
    assert.equal(titleCase('friend'),'Friend')
    //expect(titleCase('friend')).to.equal('Friend')
  })

  it('should capitalize every letter in a sencence', function(){
    assert.equal(titleCase('the grass is green'),'The Grass Is Green')
    //expect(titleCase('the grass is green')).to.equal('The Grass Is Green')
  })

})
