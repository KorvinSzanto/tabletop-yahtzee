<template functional>
<div class='fixed bottom-0 left-0 right-0 bg-gray-500 opacity-75 py-2 px-3'>
  <button
    @click='(e) => $options.methods.render(e, props.selector, props.name)'
    class='float-right bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
    Render
  </button>
</div>
</template>

<script>
import domtoimage from 'dom-to-image'

const renderNode = (node, name, download = false) => {
  console.log('rendering node: ' + name, node)

  domtoimage.toPng(node)
    .then(function (dataUrl) {
      let link = document.createElement('a');
      let image = new Image();
      link.download = `${name}.png`;
      link.href = dataUrl;
      image.src = dataUrl;

      var newWindow = window.open("");
      link.innerHTML = image.outerHTML
      newWindow.document.write(link.outerHTML)
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
}

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    selector: {
      type: String,
      required: true
    }
  },
  methods: {
    render(e, selector, name) {
      renderNode(document.querySelector(selector), name)
    }
  }
}
</script>
