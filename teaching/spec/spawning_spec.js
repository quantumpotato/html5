describe("spawning", function(){
  var gc;
  beforeEach(function() {
    gc = gameController();
  });

  it("should spawn a basic player", function(){
    var t = spawnThing('basicPlayer', gc);
    expect(t.properties).toBe('hi');
  });


});
