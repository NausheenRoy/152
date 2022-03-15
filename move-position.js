AFRAME.registerComponent('move-rocket',
    {
        schema: { moveY: { type: 'number', default: 1 } },
         
        tick: function () { 
            this.data.moveY += 0.01
            var pos = this.el.getAttribute('position') 
            pos.y = this.data.moveY
            this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z })
    }

})

AFRAME.registerComponent('zoom-out',
    {
        schema: { moveZ: { type: 'number', default: 10 } },
         
        tick: function () { 
            this.data.moveZ += 0.01
            var pos = this.el.getAttribute('position') 
            pos.z = this.data.moveZ
            this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z })
    }

})


AFRAME.registerComponent('fall-down',
    {
        schema: { moveY: { type: 'number', default: 1 } },
         
        tick: function () { 
            window.addEventListener("click", (e)=>{
                this.data.moveY -= 0.000001
            })
           
            var pos = this.el.getAttribute('position') 
            pos.y = this.data.moveY
            this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z })
    }

})