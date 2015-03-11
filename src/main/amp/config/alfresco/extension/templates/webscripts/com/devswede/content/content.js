/*globals search */
/**
 * Common content functions
 */


/**
 * Content namespace
 */
devswede.content = (function(search) {

  /**
   * Load a required cm:content node.
   * Throw NotFoundError if node can't be loaded
   * @param {string} itemId Id of the node to load.
   * @private
   */
  function getRequiredNode(itemId) {

    if (!itemId || itemId == '') {

      throw new devswede.errors.ValidationError('Missing parameter: id', 'id');

    } else {

      var curNode = search.findNode('workspace://SpacesStore/' + itemId);
      if (curNode === null) {

        throw new devswede.errors.NotFoundError('No content found with id: ' + itemId, itemId);

      } else if (!curNode.isDocument) {

        throw new devswede.errors.NotFoundError('Item is not a content node', itemId);

      } else {

        return curNode;
      }

    }

  }

  // Module interface
  return {
    getRequiredNode: getRequiredNode
  };

})(search);
