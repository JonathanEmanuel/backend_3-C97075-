export const listNumbers = ( ...numbers) => {
    const types = numbers.map( n => typeof n);
    
    // console.log(numbers);
    // console.log(types);

    const hasIsvalid = numbers.some( n => typeof n != 'number' || Number.isNaN(n));

    if( hasIsvalid) {
        console.error('Invalid parameters', types);
        process.exit(-4);
    }


    console.log('Validos: ', numbers);

}