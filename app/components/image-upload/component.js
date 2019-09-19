import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',

  classNames: ['image-upload'],

  /**
   * Update button default label text.
   *
   * @property data
   */
  updateButton: "Update",

  /**
   * Attach button default label text.
   *
   * @property data
   */
  attachButton: "Attach",

  actions: {
   /**
    * Gather image data and pass it to the update method.
    * @method uploadPhoto
    * @param {Object} data
    * @param {String} imgName
    * @param {Object} file
    */
   uploadPhoto (imgName, file) {
      file.readAsDataURL().then(url => {
        this.set(`data.${imgName}`, url);
      });
    }
  }
});

