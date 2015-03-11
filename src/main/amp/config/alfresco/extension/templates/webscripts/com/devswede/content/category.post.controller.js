/*globals devswede, args */


/**
 * Api for adding category to content node
 */
(function(devswede, args) {

  try {

    // TODO: Fix spacing. Identified as error by Closure Linter.
    devswede.log.info( 'Adding category to content');

    var contentId = args.contentId || null,
        categoryId = args.categoryId || null,
        currentNode,
        cats = [];

    // Validate input and load content node
    currentNode = devswede.content.getRequiredNode(contentId);

    // Ensure node is classifiable
    if (currentNode.properties['cm:categories'] === null) {
      currentNode.addAspect('cm:generalclassifiable');
    } else {
      cats = currentNode.properties['cm:categories'];
    }

    // Add category and save node
    cats.push(categoryId);
    currentNode.properties['cm:categories'] = cats;
    currentNode.save();

    // Send response
    devswede.api.sendResponse(200, 'Category added', currentNode.id);

  } catch (e) {
    // Log and send error response
    devswede.api.sendErrorResponse(e);
  }

})(devswede, args);
