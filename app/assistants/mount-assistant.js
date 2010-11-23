function MountAssistant()
{
	
	this.menuModel =
	{
		visible: true,
		items:
		[
			{
				label: "Preferences",
				command: 'do-prefs'
			},
			{
				label: "Help",
				command: 'do-help'
			}
		]
	}
};

MountAssistant.prototype.setup = function()
{
	
	this.controller.setupWidget(Mojo.Menu.appMenu, { omitDefaultItems: true }, this.menuModel);
	
	this.filePressed =	this.filePressedHandler.bindAsEventListener(this);
	
	this.fileRowElement = this.controller.get('fileRow');
	this.fileDisplayElement = this.controller.get('fileDisplay');
	
	this.controller.listen(this.fileRowElement, Mojo.Event.tap, this.filePressed);
	
};

MountAssistant.prototype.filePressedHandler = function(event)
{
	var f = new filePicker({
		type: 'folder',
		onSelect: this.filePicked.bind(this),
		pop: false
	});
}
MountAssistant.prototype.filePicked = function(value)
{
	if (value === false)
	{
	}
	else
	{
		this.fileDisplayElement.update(value);
	}
}

MountAssistant.prototype.handleCommand = function(event)
{
	if (event.type == Mojo.Event.command)
	{
		switch (event.command)
		{
			case 'do-prefs':
				this.controller.stageController.pushScene('preferences');
				break;
				
			case 'do-help':
				this.controller.stageController.pushScene('help');
				break;
		}
	}
};

MountAssistant.prototype.activate = function(event)
{
};
MountAssistant.prototype.deactivate = function(event) {};
MountAssistant.prototype.cleanup = function(event)
{
};

// Local Variables:
// tab-width: 4
// End:
