const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'digimon',

  exposes: {
    // './Component': './projects/digimon/src/app/app.ts',
    './DigimonListComponent': './projects/digimon/src/app/digimon-list-component/digimon-list-component.ts',
    './DigimonDetailComponent': './projects/digimon/src/app/digimon-detail-component/digimon-detail-component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
