<template>
  <div>
    <!--<div v-bar class="el1 vb vb-visible" style="position: relative; overflow: hidden;">-->
      <!--<div class="el2 vb-content" style="display: block; overflow-x: hidden; overflow-y: scroll; height: 100%; width: calc(100% + 17px);">&lt;!&ndash;&ndash;&gt;-->
        <!--Their study may one day allow a reconstruction of the history of the movement of Earth’s plates — and the processes linked to these movements over billions of years, like mass extinction events, diamond and oil deposits, and changes in climate. If you were to drill nearly 4,000 miles into the Earth, you’d reach its core, a ball of solid iron surrounded by liquid that scientists estimate is hotter than the sun. Before making it there, you’d hit the mantle — an 1,800-mile-thick layer of solid rock that can flow like a liquid, just substantially slower. This mantle is the reason plates move across the surface. It’s why we have continents, earthquakes and volcanoes. The closest anyone ever got to the mantle was a seven-mile-deep hole drilled into the crust on a peninsula in western Russia.-->
        <!--But now we can better understand what’s happening below by looking at Mauna Kea and Mauna Loa, said Mr. Jones. The prevailing hypothesis has been that volcanoes like these two in Hawaii are chemical fingerprints of the Earth’s composition at the deep mantle, just at the border of its core.-->
        <!--Scientists have seismic evidence that the deep part of the mantle is a graveyard where long ago slabs of earth were subducted, or thrust underneath one another, creating separate regions with different chemical compositions that eventually made their way to the surface in a hot mantle plume, or upwelling, as the core heated the rock into magma.-->
        <!--<br><img src="https://unsplash.it/1000/500" width="250" height="125"> <br>-->
        <!--But that didn’t explain the separate tracks along which the volcanoes formed.-->
      <!--</div>-->
    <!--</div>-->

    <div v-bar class="el1"> <!-- el1 -->
      <div> <!-- el2 -->
        Their study may one day allow a reconstruction of the history of the movement of Earth’s plates — and the processes linked to these movements over billions of years, like mass extinction events, diamond and oil deposits, and changes in climate. If you were to drill nearly 4,000 miles into the Earth, you’d reach its core, a ball of solid iron surrounded by liquid that scientists estimate is hotter than the sun. Before making it there, you’d hit the mantle — an 1,800-mile-thick layer of solid rock that can flow like a liquid, just substantially slower. This mantle is the reason plates move across the surface. It’s why we have continents, earthquakes and volcanoes. The closest anyone ever got to the mantle was a seven-mile-deep hole drilled into the crust on a peninsula in western Russia.
        But now we can better understand what’s happening below by looking at Mauna Kea and Mauna Loa, said Mr. Jones. The prevailing hypothesis has been that volcanoes like these two in Hawaii are chemical fingerprints of the Earth’s composition at the deep mantle, just at the border of its core.
        Scientists have seismic evidence that the deep part of the mantle is a graveyard where long ago slabs of earth were subducted, or thrust underneath one another, creating separate regions with different chemical compositions that eventually made their way to the surface in a hot mantle plume, or upwelling, as the core heated the rock into magma.
      </div>
      <!-- dragger will be automatically added here -->
    </div>
  </div>
</template>


<script type="text/ecmascript-6">

export default {
  data() {
    return {
      select1: '1'
    }
  },
}
</script>

<style>
  .vb > .vb-dragger {
    z-index: 5;
    width: 12px;
    right: 0;
  }

  .vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
            background-color 100ms ease-out,
            margin 100ms ease-out,
            height 100ms ease-out;
    transition:
            background-color 100ms ease-out,
            margin 100ms ease-out,
            height 100ms ease-out;
    background-color: rgba(48, 121, 244,.1);
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
  }

  .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.3);
  }

  .vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
    margin: 0px;
    height: 100%;
  }

  .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
    margin: 0px;
    height: 100%;
  }

  .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(48, 121, 244,.5);
  }

  .el1 {
    height: 200px;
    background-color: #f0f6ff;
    color: #3079f4;
    margin: 0 auto;
  }
</style>