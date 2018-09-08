var expect = require('chai').expect;
var clarg = require('..');
var defaultArgs = 'first second --flag --equals=true --space yes'.split(' ');

describe('clarg', function() {
  it('should return an object with 3 keys of correct types', function() {
    var parsed = clarg();

    expect(Object.keys(parsed)).to.include.members(['args', 'opts', 'raw']);

    expect(Array.isArray(parsed.args)).to.be.ok;
    expect(typeof parsed.opts).to.equal('object');
    expect(Array.isArray(parsed.raw)).to.be.ok;
  });

  it('should parse manually provided arguments array', function() {
    var parsed = clarg(defaultArgs);

    expect(parsed.args.length).to.be.ok;
    expect(Object.keys(parsed.opts)).to.include.members(['flag', 'equals', 'space']);
    expect(parsed.raw).to.include.members(defaultArgs);

    expect(parsed.opts.flag).to.equal(true);
    expect(parsed.opts.equals).to.equal('true');
    expect(parsed.opts.space).to.equal('yes');
  });

  it('should use process arguments if none are provided', function() {
    var oldArgv = process.argv;
    process.argv = ['node', 'scriptname.js', 'hello', '-world']
    var parsed = clarg();
    process.argv = oldArgv;

    expect(parsed.args.length).to.equal(1);
    expect(parsed.args[0]).to.equal('hello');

    expect(parsed.opts.world).to.equal(true);
    expect(parsed.raw).to.include.members(['hello', '-world']);
  });

  it('should support single dash before flag names', function() {
    var parsed = clarg('-a -b=1 -c 2'.split(' '));

    expect(Object.keys(parsed)).to.include.members(['args', 'opts', 'raw']);

    expect(parsed.args).to.be.empty;
    expect(Object.keys(parsed.opts)).to.include.members(['a', 'b', 'c']);
    expect(parsed.raw).to.include.members(['-a', '-b=1', '-c', '2']);

    expect(parsed.opts.a).to.equal(true);
    expect(parsed.opts.b).to.equal('1');
    expect(parsed.opts.c).to.equal('2');
  });

});
