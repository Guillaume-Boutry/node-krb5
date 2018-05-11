// Generated by CoffeeScript 2.2.4
var krb;

krb = require('./build/Debug/krb5');

krb.krb5_init_context(function(err, ctx) {
  if (err) {
    console.log('Error: Krb5 init context failed.');
    return;
  }
  console.log('Krb5 context initilizied');
  return krb.krb5_get_default_realm(ctx, function(err, realm) {
    if (err) {
      console.log('Error: cannot get default realm');
      return;
    }
    console.log('Default realm: ', realm);
    return krb.krb5_build_principal(ctx, realm.length, realm, 'user', function(err, princ) {
      if (err) {
        console.log('Error: connot build principal');
        return;
      }
      console.log('Principal build');
      return krb.krb5_cc_default(ctx, function(err, ccache) {
        var ccache_name;
        if (err) {
          console.log('Error: cannot retrieve default ccache');
          return;
        }
        ccache_name = krb.krb5_cc_get_name_sync(ctx, ccache);
        console.log(ccache_name);
        err = krb.krb5_cc_initialize_sync(ctx, ccache, princ);
        if (err) {
          console.log('Cannot initialize cc (sync)');
          return;
        }
        return krb.krb5_cc_initialize(ctx, ccache, princ, function(err) {
          if (err) {
            console.log('Cannot initialize credential cache');
            return;
          }
          ccache_name = krb.krb5_cc_get_name_sync(ctx, ccache);
          return console.log(ccache_name);
        });
      });
    });
  });
});

// To generate js file:
//   coffee -cb module.coffee
