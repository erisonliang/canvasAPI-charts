var r={d:(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o:(r,t)=>Object.prototype.hasOwnProperty.call(r,t)},t={};r.d(t,{Z:()=>a});class e{identityMatrix(){return[1,0,0,0,1,0,0,0,1]}projectionMatrix(r,t){return[2/r,0,0,0,-2/t,0,-1,1,1]}translationMatrix(r,t){return[1,0,0,0,1,0,r,t,1]}rotationMatrix(r){const t=r/180*Math.PI,e=Math.sin(t),a=Math.cos(t);return[a,-e,0,e,a,0,0,0,1]}scaleMatrix(r,t){return[r,0,0,0,t,0,0,0,1]}arrayToMatrix(r,t){const e=[];for(let a=0;a<r.length;a+=t)e.push(r.slice(a,a+t));return e}multiplyMatrices(r,t){if(r.length===t.length&&[1,4,9,16].includes(r.length)){const e=Math.sqrt(r.length),a=this.arrayToMatrix(r,e),o=this.arrayToMatrix(t,e);return a.map(((r,t)=>o[0].map(((e,i)=>r.reduce(((r,e,n)=>r+a[t][n]*o[n][i]),0))))).flat(1)}}}class a{drawF(r){const t=this.createProgramFromScripts(r);r.useProgram(t);const a=r.getAttribLocation(t,"a_position"),o=r.getUniformLocation(t,"u_matrix");r.viewport(0,0,r.canvas.width,r.canvas.height),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT);const i=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,i),this.setGeometry(r),r.enableVertexAttribArray(a);const n=r.FLOAT;r.vertexAttribPointer(a,2,n,!1,0,0);const c=new e,s=c.identityMatrix(),l=c.projectionMatrix(r.canvas.width,r.canvas.height),h=c.translationMatrix(0,0),m=c.rotationMatrix(0),g=c.scaleMatrix(1,1);let u=c.multiplyMatrices(s,l);u=c.multiplyMatrices(u,h),u=c.multiplyMatrices(u,m),u=c.multiplyMatrices(u,g),r.uniformMatrix3fv(o,!1,u);const d=r.TRIANGLES;r.drawArrays(d,0,18)}createProgramFromScripts(r){const t=this.createShader(r,r.VERTEX_SHADER,"attribute vec2 a_position;\r\nvarying vec4 v_color;\r\nuniform mat3 u_matrix;\r\nvoid main() {\r\n    gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);\r\n    v_color = gl_Position;\r\n}"),e=this.createShader(r,r.FRAGMENT_SHADER,"precision mediump float;\r\nvarying vec4 v_color;\r\nvoid main() {\r\n    gl_FragColor = v_color;\r\n}");return this.createProgram(r,t,e)}createShader(r,t,e){const a=r.createShader(t);if(r.shaderSource(a,e),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS))return a;console.log(r.getShaderInfoLog(a)),r.deleteShader(a)}createProgram(r,t,e){const a=r.createProgram();if(r.attachShader(a,t),r.attachShader(a,e),r.linkProgram(a),r.getProgramParameter(a,r.LINK_STATUS))return a;console.log(r.getProgramInfoLog(a)),r.deleteProgram(a)}setGeometry(r){r.bufferData(r.ARRAY_BUFFER,new Float32Array([0,0,30,0,0,150,0,150,30,0,30,150,30,0,100,0,30,30,30,30,100,0,100,30,30,60,67,60,30,90,30,90,67,60,67,90]),r.STATIC_DRAW)}}var o=t.Z;export{o as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVNELEVBQUcrQyxhQUN0QyxPQUFPOUMsRUFFcEJ1QyxRQUFRQyxJQUFJekMsRUFBR2dELGtCQUFrQi9DLElBQ2pDRCxFQUFHaUQsY0FBY2hELEdBR2JnQixZQUFZakIsR0FDaEJBLEVBQUdrRCxXQUNDbEQsRUFBR2dCLGFBQ0gsSUFBSW1DLGFBQWEsQ0FFYixFQUFHLEVBQ0gsR0FBSSxFQUNKLEVBQUcsSUFDSCxFQUFHLElBQ0gsR0FBSSxFQUNKLEdBQUksSUFHSixHQUFJLEVBQ0osSUFBSyxFQUNMLEdBQUksR0FDSixHQUFJLEdBQ0osSUFBSyxFQUNMLElBQUssR0FHTCxHQUFJLEdBQ0osR0FBSSxHQUNKLEdBQUksR0FDSixHQUFJLEdBQ0osR0FBSSxHQUNKLEdBQUksS0FFUm5ELEVBQUdvRCxjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGJyei93ZWJnbC1jaGFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AYnJ6L3dlYmdsLWNoYXJ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AYnJ6L3dlYmdsLWNoYXJ0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGJyei93ZWJnbC1jaGFydC8uL3NyYy9jbGFzc2VzL0RyYXdVdGlscy50cyIsIndlYnBhY2s6Ly9AYnJ6L3dlYmdsLWNoYXJ0Ly4vc3JjL2NsYXNzZXMvQ2hhcnQudHMiLCJ3ZWJwYWNrOi8vQGJyei93ZWJnbC1jaGFydC8uL3NyYy9zaGFkZXJzL3ZlcnRleFNoYWRlci5nbHNsIiwid2VicGFjazovL0Bicnovd2ViZ2wtY2hhcnQvLi9zcmMvc2hhZGVycy9mcmFnbWVudFNoYWRlci5nbHNsIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd1V0aWxzIHtcclxuICAgIGlkZW50aXR5TWF0cml4KCk6IG51bWJlcltdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0aW9uTWF0cml4KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDIgLyB3aWR0aCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgLTIgLyBoZWlnaHQsIDAsXHJcbiAgICAgICAgICAgIC0xLCAxLCAxXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIHRyYW5zbGF0aW9uTWF0cml4KHR4OiBudW1iZXIsIHR5OiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCxcclxuICAgICAgICAgICAgdHgsIHR5LCAxLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICByb3RhdGlvbk1hdHJpeChkZWdyZWVzOiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgY29uc3QgcmFkaWFucyA9IGRlZ3JlZXMgLyAxODAgKiBNYXRoLlBJO1xyXG4gICAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihyYWRpYW5zKTtcclxuICAgICAgICBjb25zdCBjID0gTWF0aC5jb3MocmFkaWFucyk7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgYywgLXMsIDAsXHJcbiAgICAgICAgICAgIHMsIGMsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIHNjYWxlTWF0cml4KHN4OiBudW1iZXIsIHN5OiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgc3gsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIHN5LCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLFxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhcnJheVRvTWF0cml4KGFycjogbnVtYmVyW10sIHNpemU6IG51bWJlcik6IG51bWJlcltdW10ge1xyXG4gICAgICAgIGNvbnN0IHJlczogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSBzaXplKVxyXG4gICAgICAgICAgICByZXMucHVzaChhcnIuc2xpY2UoaSwgaSArIHNpemUpKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZSBtYXRoLmpzIGlmIG5lZWRlZCAtIGNvZGUgYnkgSmFuIFR1cm/FiFxyXG4gICAgbXVsdGlwbHlNYXRyaWNlcyhGOiBudW1iZXJbXSwgUzogbnVtYmVyW10pOiBudW1iZXJbXSB7XHJcbiAgICAgICAgaWYgKEYubGVuZ3RoID09PSBTLmxlbmd0aCAmJiBbMSwgNCwgOSwgMTZdLmluY2x1ZGVzKEYubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3cgPSBNYXRoLnNxcnQoRi5sZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBBID0gdGhpcy5hcnJheVRvTWF0cml4KEYsIHBvdyk7XHJcbiAgICAgICAgICAgIGNvbnN0IEIgPSB0aGlzLmFycmF5VG9NYXRyaXgoUywgcG93KTtcclxuICAgICAgICAgICAgcmV0dXJuIEEubWFwKChyb3csIGkpID0+XHJcbiAgICAgICAgICAgICAgICBCWzBdLm1hcCgoXywgaikgPT5cclxuICAgICAgICAgICAgICAgICAgICByb3cucmVkdWNlKChhY2MsIF8sIG4pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjYyArIEFbaV1bbl0gKiBCW25dW2pdLCAwXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApLmZsYXQoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IERyYXdVdGlscyBmcm9tIFwiLi9EcmF3VXRpbHNcIjtcclxuaW1wb3J0IHZlcnRleFNoYWRlclN0cmluZyBmcm9tICcuLi9zaGFkZXJzL3ZlcnRleFNoYWRlci5nbHNsJztcclxuaW1wb3J0IGZyYWdtZW50U2hhZGVyU3RyaW5nIGZyb20gJy4uL3NoYWRlcnMvZnJhZ21lbnRTaGFkZXIuZ2xzbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFydCB7XHJcbiAgICBkcmF3RihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuY3JlYXRlUHJvZ3JhbUZyb21TY3JpcHRzKGdsKTtcclxuICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcclxuICAgICAgICBjb25zdCBtYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfbWF0cml4JylcclxuXHJcbiAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgICAgICBjb25zdCBwb3NpdGlvbkJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcik7XHJcbiAgICAgICAgdGhpcy5zZXRHZW9tZXRyeShnbCk7XHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IHNpemUgPSAyOyAgICAgICAgICAgICAvLyAyIGNvbXBvbmVudHMgcGVyIGl0ZXJhdGlvblxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnbC5GTE9BVDsgICAgICAvLyB0eXBlIG9mIGNvbXBvbmVudCAoMzJiaXQgZmxvYXQpXHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplID0gZmFsc2U7ICAgIC8vIGRvbid0IG5vcm1hbGl6ZSBkYXRhXHJcbiAgICAgICAgY29uc3Qgc3RyaWRlID0gMCAgICAgICAgICAgIC8vIG1vdmUgc2l6ZSAqIHNpemVvZih0eXBlKSBiaXRzIHRvIGdldCBuZXh0IHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMCAgICAgICAgICAgIC8vIHN0YXJ0cyBhdCB0aGF0IGJpdFxyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYXdVdGlsczogRHJhd1V0aWxzID0gbmV3IERyYXdVdGlscygpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uWCA9IDA7XHJcbiAgICAgICAgY29uc3QgdHJhbnNsYXRpb25ZID0gMDtcclxuICAgICAgICBjb25zdCByb3RhdGlvbkluRGVncmVlcyA9IDA7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVYID0gMTtcclxuICAgICAgICBjb25zdCBzY2FsZVkgPSAxO1xyXG5cclxuICAgICAgICBjb25zdCBpZGVudGl0eU1hdHJpeCA9IGRyYXdVdGlscy5pZGVudGl0eU1hdHJpeCgpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3Rpb25NYXRyaXggPSBkcmF3VXRpbHMucHJvamVjdGlvbk1hdHJpeChnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IHRyYW5zbGF0aW9uTWF0cml4ID0gZHJhd1V0aWxzLnRyYW5zbGF0aW9uTWF0cml4KHRyYW5zbGF0aW9uWCwgdHJhbnNsYXRpb25ZKTtcclxuICAgICAgICBjb25zdCByb3RhdGlvbk1hdHJpeCA9IGRyYXdVdGlscy5yb3RhdGlvbk1hdHJpeChyb3RhdGlvbkluRGVncmVlcyk7XHJcbiAgICAgICAgY29uc3Qgc2NhbGVNYXRyaXggPSBkcmF3VXRpbHMuc2NhbGVNYXRyaXgoc2NhbGVYLCBzY2FsZVkpO1xyXG5cclxuICAgICAgICBsZXQgbWF0cml4ID0gZHJhd1V0aWxzLm11bHRpcGx5TWF0cmljZXMoaWRlbnRpdHlNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xyXG4gICAgICAgIG1hdHJpeCA9IGRyYXdVdGlscy5tdWx0aXBseU1hdHJpY2VzKG1hdHJpeCwgdHJhbnNsYXRpb25NYXRyaXgpO1xyXG4gICAgICAgIG1hdHJpeCA9IGRyYXdVdGlscy5tdWx0aXBseU1hdHJpY2VzKG1hdHJpeCwgcm90YXRpb25NYXRyaXgpO1xyXG4gICAgICAgIG1hdHJpeCA9IGRyYXdVdGlscy5tdWx0aXBseU1hdHJpY2VzKG1hdHJpeCwgc2NhbGVNYXRyaXgpO1xyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXgzZnYobWF0cml4VW5pZm9ybUxvY2F0aW9uLCBmYWxzZSwgbWF0cml4KTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpbWl0aXZlVHlwZSA9IGdsLlRSSUFOR0xFUztcclxuICAgICAgICBjb25zdCBjb3VudCA9IDE4O1xyXG4gICAgICAgIGdsLmRyYXdBcnJheXMocHJpbWl0aXZlVHlwZSwgb2Zmc2V0LCBjb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9ncmFtRnJvbVNjcmlwdHMoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHZlcnRleFNoYWRlclNvdXJjZSA9IHZlcnRleFNoYWRlclN0cmluZztcclxuICAgICAgICBjb25zdCBmcmFnbWVudFNoYWRlclNvdXJjZSA9IGZyYWdtZW50U2hhZGVyU3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xyXG4gICAgICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmNyZWF0ZVByb2dyYW0oZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlU2hhZGVyKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHR5cGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcpOiBXZWJHTFNoYWRlciB7XHJcbiAgICAgICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xyXG4gICAgICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBzdWNjZXNzID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpO1xyXG4gICAgICAgIGlmIChzdWNjZXNzKSByZXR1cm4gc2hhZGVyO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpO1xyXG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUHJvZ3JhbShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB2ZXJ0ZXhTaGFkZXI6IFdlYkdMU2hhZGVyLCBmcmFnbWVudFNoYWRlcjogV2ViR0xTaGFkZXIpOiBXZWJHTFByb2dyYW0gfCBudWxsIHtcclxuICAgICAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcbiAgICAgICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKTtcclxuICAgICAgICBpZiAoc3VjY2VzcykgcmV0dXJuIHByb2dyYW07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKTtcclxuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0R2VvbWV0cnkoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoXHJcbiAgICAgICAgICAgIGdsLkFSUkFZX0JVRkZFUixcclxuICAgICAgICAgICAgbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAvLyBsZWZ0IGNvbHVtblxyXG4gICAgICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgICAgIDMwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMTUwLFxyXG4gICAgICAgICAgICAgICAgMCwgMTUwLFxyXG4gICAgICAgICAgICAgICAgMzAsIDAsXHJcbiAgICAgICAgICAgICAgICAzMCwgMTUwLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRvcCBydW5nXHJcbiAgICAgICAgICAgICAgICAzMCwgMCxcclxuICAgICAgICAgICAgICAgIDEwMCwgMCxcclxuICAgICAgICAgICAgICAgIDMwLCAzMCxcclxuICAgICAgICAgICAgICAgIDMwLCAzMCxcclxuICAgICAgICAgICAgICAgIDEwMCwgMCxcclxuICAgICAgICAgICAgICAgIDEwMCwgMzAsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbWlkZGxlIHJ1bmdcclxuICAgICAgICAgICAgICAgIDMwLCA2MCxcclxuICAgICAgICAgICAgICAgIDY3LCA2MCxcclxuICAgICAgICAgICAgICAgIDMwLCA5MCxcclxuICAgICAgICAgICAgICAgIDMwLCA5MCxcclxuICAgICAgICAgICAgICAgIDY3LCA2MCxcclxuICAgICAgICAgICAgICAgIDY3LCA5MCxcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IFwiYXR0cmlidXRlIHZlYzIgYV9wb3NpdGlvbjtcXHJcXG52YXJ5aW5nIHZlYzQgdl9jb2xvcjtcXHJcXG51bmlmb3JtIG1hdDMgdV9tYXRyaXg7XFxyXFxudm9pZCBtYWluKCkge1xcclxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHVfbWF0cml4ICogdmVjMyhhX3Bvc2l0aW9uLCAxKSkueHksIDAsIDEpO1xcclxcbiAgICB2X2NvbG9yID0gZ2xfUG9zaXRpb247XFxyXFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXHJcXG52YXJ5aW5nIHZlYzQgdl9jb2xvcjtcXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuICAgIGdsX0ZyYWdDb2xvciA9IHZfY29sb3I7XFxyXFxufVwiIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiRHJhd1V0aWxzIiwiaWRlbnRpdHlNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2xhdGlvbk1hdHJpeCIsInR4IiwidHkiLCJyb3RhdGlvbk1hdHJpeCIsImRlZ3JlZXMiLCJyYWRpYW5zIiwiTWF0aCIsIlBJIiwicyIsInNpbiIsImMiLCJjb3MiLCJzY2FsZU1hdHJpeCIsInN4Iiwic3kiLCJhcnJheVRvTWF0cml4IiwiYXJyIiwic2l6ZSIsInJlcyIsImkiLCJsZW5ndGgiLCJwdXNoIiwic2xpY2UiLCJtdWx0aXBseU1hdHJpY2VzIiwiRiIsIlMiLCJpbmNsdWRlcyIsInBvdyIsInNxcnQiLCJBIiwidGhpcyIsIkIiLCJtYXAiLCJyb3ciLCJfIiwiaiIsInJlZHVjZSIsImFjYyIsIm4iLCJmbGF0IiwiQ2hhcnQiLCJkcmF3RiIsImdsIiwicHJvZ3JhbSIsImNyZWF0ZVByb2dyYW1Gcm9tU2NyaXB0cyIsInVzZVByb2dyYW0iLCJwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0QXR0cmliTG9jYXRpb24iLCJtYXRyaXhVbmlmb3JtTG9jYXRpb24iLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ2aWV3cG9ydCIsImNhbnZhcyIsImNsZWFyQ29sb3IiLCJjbGVhciIsIkNPTE9SX0JVRkZFUl9CSVQiLCJwb3NpdGlvbkJ1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJzZXRHZW9tZXRyeSIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidHlwZSIsIkZMT0FUIiwidmVydGV4QXR0cmliUG9pbnRlciIsImRyYXdVdGlscyIsIm1hdHJpeCIsInVuaWZvcm1NYXRyaXgzZnYiLCJwcmltaXRpdmVUeXBlIiwiVFJJQU5HTEVTIiwiZHJhd0FycmF5cyIsInZlcnRleFNoYWRlciIsImNyZWF0ZVNoYWRlciIsIlZFUlRFWF9TSEFERVIiLCJmcmFnbWVudFNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsImNyZWF0ZVByb2dyYW0iLCJzb3VyY2UiLCJzaGFkZXIiLCJzaGFkZXJTb3VyY2UiLCJjb21waWxlU2hhZGVyIiwiZ2V0U2hhZGVyUGFyYW1ldGVyIiwiQ09NUElMRV9TVEFUVVMiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2hhZGVySW5mb0xvZyIsImRlbGV0ZVNoYWRlciIsImF0dGFjaFNoYWRlciIsImxpbmtQcm9ncmFtIiwiZ2V0UHJvZ3JhbVBhcmFtZXRlciIsIkxJTktfU1RBVFVTIiwiZ2V0UHJvZ3JhbUluZm9Mb2ciLCJkZWxldGVQcm9ncmFtIiwiYnVmZmVyRGF0YSIsIkZsb2F0MzJBcnJheSIsIlNUQVRJQ19EUkFXIl0sInNvdXJjZVJvb3QiOiIifQ==