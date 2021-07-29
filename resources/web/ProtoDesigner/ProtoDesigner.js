'use strict';

import {webots} from '../wwi/webots.js';
import WbWorld from '../wwi/nodes/WbWorld.js';
import WrenRenderer from '../wwi/WrenRenderer.js';

import Proto from './classes/Proto.js';
import AssetLibrary from './classes/AssetLibrary.js';

import EditorView from './view/EditorView.js';
import HeaderView from './view/HeaderView.js';
import LibraryView from './view/LibraryView.js';

import {getAnId} from '../wwi/nodes/utils/utils.js';

class ProtoDesigner {
  constructor() {
    console.log('Constructor ProtoDesigner');

    let script = document.createElement('script');
    script.textContent = `var Module = [];
        Module['locateFile'] = function(path, prefix) {

        // if it's a data file, use a custom dir
        if (path.endsWith(".data"))
          return "https://cyberbotics.com/wwi/R2021b/" + path;

        // otherwise, use the default, the prefix (JS file's dir) + the path
        return prefix + path;
      }`;
    document.head.appendChild(script);

    this.editorElement = document.getElementById('proto-parameters');
    if (typeof this.editorElement === 'undefined') {
      console.error('The Proto Designer cannot find the proto-parameters component.');
      return;
    }

    this.headerElement = document.getElementById('header-menu');
    if (typeof this.editorElement === 'undefined') {
      console.error('The Proto Designer cannot find the header-menu component.');
      return;
    }

    this._init();
  };

  async _init() {
    Module.onRuntimeInitialized = () => {
      Promise.all(promises).then(() => {
        WbWorld.init();

        this.renderer = new WrenRenderer();
        this.view = new webots.View(document.getElementById('view3d'));

        this.header = new HeaderView(this.headerElement, this);
        this.assetLibrary = new AssetLibrary();
        this.libraryView = new LibraryView(this.libraryElement, this.assetLibrary);
        this.editor = new EditorView(this.editorElement, this.view, this, this.libraryView);
        //this.assetLibrary.addObserver('loaded', () => { this.libraryView.loadAssets(); });

        //this.library = new LibraryView(this.libraryElement);
        //this.loadLibrary('./library/library.json');

        this.activeProtos = new Map(); // currently loaded protos

        // load default scene
        this.loadMinimalScene(); // setup background, viewpoint and worldinfo

        //const url = '../wwi/Protos/ProtoTestParameters.proto';
        // const url = '../wwi/Protos/ProtoBox.proto';
        // const url = '../wwi/Protos/ProtoTemplate.proto';
        // const url = '../wwi/Protos/ProtoTransform.proto';
        //const url = '../wwi/Protos/ProtoTestAll.proto';
        // const url = '../wwi/Protos/ProtoDefUse.proto';

        // base geometries
        // const url = '../wwi/Protos/ProtoTestBox.proto';
        // const url = '../wwi/Protos/ProtoTestCylinder.proto';
        // const url = '../wwi/Protos/ProtoTestSphere.proto';
        // const url = '../wwi/Protos/ProtoTestCapsule.proto';
        // const url = '../wwi/Protos/ProtoTestCone.proto';

        //const url = '../wwi/Protos/ProtoTestSFNode.proto';
        //const url = './examples/protos/ProtoSolid.proto';
        //const url = './examples/protos/ProtoIndexedFaceSet.proto';
        //const url = './examples/protos/ProtoSlot.proto';
        //const url = './examples/protos/ProtoSlotContainer.proto';
        //const url = './library/Tinkerbots/ProtoWithNested.proto';

        // Tinkerbots
        //const url = './library/Tinkerbots/TinkerbotsCubieTriangle.proto';
    //const url = './library/Tinkerbots/TinkerbotsAxle.proto';
        const url = './library/Tinkerbots/TinkerbotsBase.proto';
        if (typeof this.scene === 'undefined')
          throw new Error('Scene not ready yet');

        this.loadProto(url);
      });
    };

    let promises = [];
    promises.push(this._load('https://git.io/glm-js.min.js'));
    promises.push(this._load('https://cyberbotics.com/wwi/R2021b/enum.js'));
    promises.push(this._load('https://cyberbotics.com/wwi/R2021b/wrenjs.js'));
  };

  _load(scriptUrl) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.onload = resolve;
      script.src = scriptUrl;
      document.head.appendChild(script);
    });
  };

  insertProto(rawProto, parentId, parameter) {
    console.log('Raw Proto:\n' + rawProto);
    const newProto = new Proto(rawProto); // note: only the header is parsed in the constructor
    newProto.parseBody();

    this.activeProtos.set(newProto.id, newProto);

    this.editor.refreshParameters();

    console.log(newProto.x3d);
    this.view.x3dScene._loadObject(newProto.x3d, parentId);
  }

  loadProto(url, parentId, parameter) {
    console.log('Requesting proto: ' + url);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true);
    xmlhttp.overrideMimeType('plain/text');
    xmlhttp.onreadystatechange = async() => {
      if (xmlhttp.readyState === 4 && (xmlhttp.status === 200 || xmlhttp.status === 0)) // Some browsers return HTTP Status 0 when using non-http protocol (for file://)
        await this.insertProto(xmlhttp.responseText, parentId, parameter);
    };
    xmlhttp.send();
  };

  loadLibrary(url) {
    console.log('Loading library file: ' + url);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, true);
    xmlhttp.overrideMimeType('json');
    xmlhttp.onreadystatechange = async() => {
      if (xmlhttp.readyState === 4 && (xmlhttp.status === 200 || xmlhttp.status === 0)) // Some browsers return HTTP Status 0 when using non-http protocol (for file://)
        await this.library.parseLibrary(xmlhttp.responseText);
    };
    xmlhttp.send();
  };

  async loadMinimalScene() {
    const xml = document.implementation.createDocument('', '', null);
    this.scene = xml.createElement('Scene');

    let worldinfo = xml.createElement('WorldInfo');
    worldinfo.setAttribute('id', getAnId());
    worldinfo.setAttribute('basicTimeStep', '32');
    worldinfo.setAttribute('coordinateSystem', 'NUE');

    let viewpoint = xml.createElement('Viewpoint');
    viewpoint.setAttribute('id', getAnId());
    viewpoint.setAttribute('orientation', '-0.84816706 -0.5241698 -0.07654181 0.34098753');
    viewpoint.setAttribute('position', '-1.2506319 2.288824 7.564137');
    viewpoint.setAttribute('exposure', '1');
    viewpoint.setAttribute('bloomThreshold', '21');
    viewpoint.setAttribute('zNear', '0.05');
    viewpoint.setAttribute('zFar', '0');
    viewpoint.setAttribute('followSmoothness', '0.5');
    viewpoint.setAttribute('ambientOcclusionRadius', '2');

    let background = xml.createElement('Background');
    background.setAttribute('id', getAnId());
    background.setAttribute('skyColor', '0.15 0.45 1');

    this.scene.appendChild(worldinfo);
    this.scene.appendChild(viewpoint);
    this.scene.appendChild(background);
    xml.appendChild(this.scene);

    const x3d = new XMLSerializer().serializeToString(xml);
    this.view.open(x3d, 'x3d', '', true, this.renderer);
  }

  exportProto() {
    let s = '';
    s += '#VRML_SIM R2021b utf8\n\n';
    s += 'PROTO CustomProto [\n';

    s += this.exportParameters(this.activeProtos.get(0), '  ');

    s += ']\n';
    s += this.activeProtos.get(0).rawBody;

    console.log(s);
    return s;
  };

  exportParameters(proto, indent = '') {
    let t = '';
    const parameters = proto.parameters;
    for (const parameter of parameters.values()) {
      t += indent + parameter.exportVrml() + '\n';
    }
    return t;
  };
};

let designer = new ProtoDesigner( // eslint-disable-line no-new
);
