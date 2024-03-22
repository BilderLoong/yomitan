import Handlebars from 'handlebars'

Handlebars.registerHelper("with", function(context,options) {
console.log({ that:this,context,options });
    return options.fn(context);
  });

const template = Handlebars.compile(`
{{~#with haha~}} {{baz}} {{~/with~}}
`)

console.log(template({ foo: 'bar',haha:{baz:'baz'} }))
