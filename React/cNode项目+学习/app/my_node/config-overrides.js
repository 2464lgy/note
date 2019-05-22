const { override, fixBabelImports }=require('customize-cra');
module.exports = override(
    // do stuff with the webpack config...
    // config=fixBabelImports(
    //     ['import',
    //         {
    //             libraryName:'antd',
    //             libraryDirectory:'es',
    //             style:'css'
    //         }
    //     ],
    //     config
    // );
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:'css', 
    }),
);