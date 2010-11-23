service.identifier = 'palm://org.webosinternals.gehrpelcg';

function service(){};

service.getDirListing = function(callback, dir)
{
	var request = new Mojo.Service.Request(service.identifier,
	{
		method: 'getDirListing',
		parameters: {"directory": dir},
		onSuccess: callback,
		onFailure: callback
	});
	return request;
};


// Local Variables:
// tab-width: 4
// End:
