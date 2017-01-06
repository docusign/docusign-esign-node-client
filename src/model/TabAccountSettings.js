(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([undefined, './SettingsMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(undefined, require('./SettingsMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    factory(root.Docusign, root.Docusign.SettingsMetadata);
  }
}(this, function(module, SettingsMetadata) {
  'use strict';

  
  

  
  var TabAccountSettings = function TabAccountSettings() { 
    var self = this;
    

    self.constructFromObject = function(data) {
      if (!data) {
        return;
      }
      
      if (data.textTabsEnabled) {
        self.textTabsEnabled = data.textTabsEnabled;
      }
      
      if (data.textTabsMetadata) {
        self.textTabsMetadata = new data.textTabsMetadata.constructor();
        self.textTabsMetadata.constructFromObject(data.textTabsMetadata);
      }
      
      if (data.radioTabsEnabled) {
        self.radioTabsEnabled = data.radioTabsEnabled;
      }
      
      if (data.radioTabsMetadata) {
        self.radioTabsMetadata = new data.radioTabsMetadata.constructor();
        self.radioTabsMetadata.constructFromObject(data.radioTabsMetadata);
      }
      
      if (data.checkboxTabsEnabled) {
        self.checkboxTabsEnabled = data.checkboxTabsEnabled;
      }
      
      if (data.checkboxTabsMetadata) {
        self.checkboxTabsMetadata = new data.checkboxTabsMetadata.constructor();
        self.checkboxTabsMetadata.constructFromObject(data.checkboxTabsMetadata);
      }
      
      if (data.listTabsEnabled) {
        self.listTabsEnabled = data.listTabsEnabled;
      }
      
      if (data.listTabsMetadata) {
        self.listTabsMetadata = new data.listTabsMetadata.constructor();
        self.listTabsMetadata.constructFromObject(data.listTabsMetadata);
      }
      
      if (data.approveDeclineTabsEnabled) {
        self.approveDeclineTabsEnabled = data.approveDeclineTabsEnabled;
      }
      
      if (data.approveDeclineTabsMetadata) {
        self.approveDeclineTabsMetadata = new data.approveDeclineTabsMetadata.constructor();
        self.approveDeclineTabsMetadata.constructFromObject(data.approveDeclineTabsMetadata);
      }
      
      if (data.noteTabsEnabled) {
        self.noteTabsEnabled = data.noteTabsEnabled;
      }
      
      if (data.noteTabsMetadata) {
        self.noteTabsMetadata = new data.noteTabsMetadata.constructor();
        self.noteTabsMetadata.constructFromObject(data.noteTabsMetadata);
      }
      
      if (data.dataFieldRegexEnabled) {
        self.dataFieldRegexEnabled = data.dataFieldRegexEnabled;
      }
      
      if (data.dataFieldRegexMetadata) {
        self.dataFieldRegexMetadata = new data.dataFieldRegexMetadata.constructor();
        self.dataFieldRegexMetadata.constructFromObject(data.dataFieldRegexMetadata);
      }
      
      if (data.dataFieldSizeEnabled) {
        self.dataFieldSizeEnabled = data.dataFieldSizeEnabled;
      }
      
      if (data.dataFieldSizeMetadata) {
        self.dataFieldSizeMetadata = new data.dataFieldSizeMetadata.constructor();
        self.dataFieldSizeMetadata.constructFromObject(data.dataFieldSizeMetadata);
      }
      
      if (data.tabLocationEnabled) {
        self.tabLocationEnabled = data.tabLocationEnabled;
      }
      
      if (data.tabLocationMetadata) {
        self.tabLocationMetadata = new data.tabLocationMetadata.constructor();
        self.tabLocationMetadata.constructFromObject(data.tabLocationMetadata);
      }
      
      if (data.tabScaleEnabled) {
        self.tabScaleEnabled = data.tabScaleEnabled;
      }
      
      if (data.tabScaleMetadata) {
        self.tabScaleMetadata = new data.tabScaleMetadata.constructor();
        self.tabScaleMetadata.constructFromObject(data.tabScaleMetadata);
      }
      
      if (data.tabLockingEnabled) {
        self.tabLockingEnabled = data.tabLockingEnabled;
      }
      
      if (data.tabLockingMetadata) {
        self.tabLockingMetadata = new data.tabLockingMetadata.constructor();
        self.tabLockingMetadata.constructFromObject(data.tabLockingMetadata);
      }
      
      if (data.savingCustomTabsEnabled) {
        self.savingCustomTabsEnabled = data.savingCustomTabsEnabled;
      }
      
      if (data.savingCustomTabsMetadata) {
        self.savingCustomTabsMetadata = new data.savingCustomTabsMetadata.constructor();
        self.savingCustomTabsMetadata.constructFromObject(data.savingCustomTabsMetadata);
      }
      
      if (data.tabTextFormattingEnabled) {
        self.tabTextFormattingEnabled = data.tabTextFormattingEnabled;
      }
      
      if (data.tabTextFormattingMetadata) {
        self.tabTextFormattingMetadata = new data.tabTextFormattingMetadata.constructor();
        self.tabTextFormattingMetadata.constructFromObject(data.tabTextFormattingMetadata);
      }
      
      if (data.sharedCustomTabsEnabled) {
        self.sharedCustomTabsEnabled = data.sharedCustomTabsEnabled;
      }
      
      if (data.sharedCustomTabsMetadata) {
        self.sharedCustomTabsMetadata = new data.sharedCustomTabsMetadata.constructor();
        self.sharedCustomTabsMetadata.constructFromObject(data.sharedCustomTabsMetadata);
      }
      
      if (data.senderToChangeTabAssignmentsEnabled) {
        self.senderToChangeTabAssignmentsEnabled = data.senderToChangeTabAssignmentsEnabled;
      }
      
      if (data.senderToChangeTabAssignmentsMetadata) {
        self.senderToChangeTabAssignmentsMetadata = new data.senderToChangeTabAssignmentsMetadata.constructor();
        self.senderToChangeTabAssignmentsMetadata.constructFromObject(data.senderToChangeTabAssignmentsMetadata);
      }
      
      if (data.tabDataLabelEnabled) {
        self.tabDataLabelEnabled = data.tabDataLabelEnabled;
      }
      
      if (data.tabDataLabelMetadata) {
        self.tabDataLabelMetadata = new data.tabDataLabelMetadata.constructor();
        self.tabDataLabelMetadata.constructFromObject(data.tabDataLabelMetadata);
      }
      
      if (data.firstLastEmailTabsEnabled) {
        self.firstLastEmailTabsEnabled = data.firstLastEmailTabsEnabled;
      }
      
      if (data.firstLastEmailTabsMetadata) {
        self.firstLastEmailTabsMetadata = new data.firstLastEmailTabsMetadata.constructor();
        self.firstLastEmailTabsMetadata.constructFromObject(data.firstLastEmailTabsMetadata);
      }
      
      if (data.calculatedFieldsEnabled) {
        self.calculatedFieldsEnabled = data.calculatedFieldsEnabled;
      }
      
      if (data.calculatedFieldsMetadata) {
        self.calculatedFieldsMetadata = new data.calculatedFieldsMetadata.constructor();
        self.calculatedFieldsMetadata.constructFromObject(data.calculatedFieldsMetadata);
      }
      
      if (data.allowTabOrder) {
        self.allowTabOrder = data.allowTabOrder;
      }
      
      if (data.allowTabOrderMetadata) {
        self.allowTabOrderMetadata = new data.allowTabOrderMetadata.constructor();
        self.allowTabOrderMetadata.constructFromObject(data.allowTabOrderMetadata);
      }
      
    }

    
    /**
     * get 
     * @return {String}
     **/
    self.getTextTabsEnabled = function() {
      return self.textTabsEnabled;
    }

    /**
     * set 
     * @param {String} textTabsEnabled
     **/
    self.setTextTabsEnabled = function (textTabsEnabled) {
      self.textTabsEnabled = textTabsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getTextTabsMetadata = function() {
      return self.textTabsMetadata;
    }

    /**
     * @param {SettingsMetadata} textTabsMetadata
     **/
    self.setTextTabsMetadata = function (textTabsMetadata) {
      self.textTabsMetadata = textTabsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getRadioTabsEnabled = function() {
      return self.radioTabsEnabled;
    }

    /**
     * set 
     * @param {String} radioTabsEnabled
     **/
    self.setRadioTabsEnabled = function (radioTabsEnabled) {
      self.radioTabsEnabled = radioTabsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getRadioTabsMetadata = function() {
      return self.radioTabsMetadata;
    }

    /**
     * @param {SettingsMetadata} radioTabsMetadata
     **/
    self.setRadioTabsMetadata = function (radioTabsMetadata) {
      self.radioTabsMetadata = radioTabsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCheckboxTabsEnabled = function() {
      return self.checkboxTabsEnabled;
    }

    /**
     * set 
     * @param {String} checkboxTabsEnabled
     **/
    self.setCheckboxTabsEnabled = function (checkboxTabsEnabled) {
      self.checkboxTabsEnabled = checkboxTabsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getCheckboxTabsMetadata = function() {
      return self.checkboxTabsMetadata;
    }

    /**
     * @param {SettingsMetadata} checkboxTabsMetadata
     **/
    self.setCheckboxTabsMetadata = function (checkboxTabsMetadata) {
      self.checkboxTabsMetadata = checkboxTabsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getListTabsEnabled = function() {
      return self.listTabsEnabled;
    }

    /**
     * set 
     * @param {String} listTabsEnabled
     **/
    self.setListTabsEnabled = function (listTabsEnabled) {
      self.listTabsEnabled = listTabsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getListTabsMetadata = function() {
      return self.listTabsMetadata;
    }

    /**
     * @param {SettingsMetadata} listTabsMetadata
     **/
    self.setListTabsMetadata = function (listTabsMetadata) {
      self.listTabsMetadata = listTabsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getApproveDeclineTabsEnabled = function() {
      return self.approveDeclineTabsEnabled;
    }

    /**
     * set 
     * @param {String} approveDeclineTabsEnabled
     **/
    self.setApproveDeclineTabsEnabled = function (approveDeclineTabsEnabled) {
      self.approveDeclineTabsEnabled = approveDeclineTabsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getApproveDeclineTabsMetadata = function() {
      return self.approveDeclineTabsMetadata;
    }

    /**
     * @param {SettingsMetadata} approveDeclineTabsMetadata
     **/
    self.setApproveDeclineTabsMetadata = function (approveDeclineTabsMetadata) {
      self.approveDeclineTabsMetadata = approveDeclineTabsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getNoteTabsEnabled = function() {
      return self.noteTabsEnabled;
    }

    /**
     * set 
     * @param {String} noteTabsEnabled
     **/
    self.setNoteTabsEnabled = function (noteTabsEnabled) {
      self.noteTabsEnabled = noteTabsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getNoteTabsMetadata = function() {
      return self.noteTabsMetadata;
    }

    /**
     * @param {SettingsMetadata} noteTabsMetadata
     **/
    self.setNoteTabsMetadata = function (noteTabsMetadata) {
      self.noteTabsMetadata = noteTabsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDataFieldRegexEnabled = function() {
      return self.dataFieldRegexEnabled;
    }

    /**
     * set 
     * @param {String} dataFieldRegexEnabled
     **/
    self.setDataFieldRegexEnabled = function (dataFieldRegexEnabled) {
      self.dataFieldRegexEnabled = dataFieldRegexEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getDataFieldRegexMetadata = function() {
      return self.dataFieldRegexMetadata;
    }

    /**
     * @param {SettingsMetadata} dataFieldRegexMetadata
     **/
    self.setDataFieldRegexMetadata = function (dataFieldRegexMetadata) {
      self.dataFieldRegexMetadata = dataFieldRegexMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getDataFieldSizeEnabled = function() {
      return self.dataFieldSizeEnabled;
    }

    /**
     * set 
     * @param {String} dataFieldSizeEnabled
     **/
    self.setDataFieldSizeEnabled = function (dataFieldSizeEnabled) {
      self.dataFieldSizeEnabled = dataFieldSizeEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getDataFieldSizeMetadata = function() {
      return self.dataFieldSizeMetadata;
    }

    /**
     * @param {SettingsMetadata} dataFieldSizeMetadata
     **/
    self.setDataFieldSizeMetadata = function (dataFieldSizeMetadata) {
      self.dataFieldSizeMetadata = dataFieldSizeMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getTabLocationEnabled = function() {
      return self.tabLocationEnabled;
    }

    /**
     * set 
     * @param {String} tabLocationEnabled
     **/
    self.setTabLocationEnabled = function (tabLocationEnabled) {
      self.tabLocationEnabled = tabLocationEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getTabLocationMetadata = function() {
      return self.tabLocationMetadata;
    }

    /**
     * @param {SettingsMetadata} tabLocationMetadata
     **/
    self.setTabLocationMetadata = function (tabLocationMetadata) {
      self.tabLocationMetadata = tabLocationMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getTabScaleEnabled = function() {
      return self.tabScaleEnabled;
    }

    /**
     * set 
     * @param {String} tabScaleEnabled
     **/
    self.setTabScaleEnabled = function (tabScaleEnabled) {
      self.tabScaleEnabled = tabScaleEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getTabScaleMetadata = function() {
      return self.tabScaleMetadata;
    }

    /**
     * @param {SettingsMetadata} tabScaleMetadata
     **/
    self.setTabScaleMetadata = function (tabScaleMetadata) {
      self.tabScaleMetadata = tabScaleMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getTabLockingEnabled = function() {
      return self.tabLockingEnabled;
    }

    /**
     * set 
     * @param {String} tabLockingEnabled
     **/
    self.setTabLockingEnabled = function (tabLockingEnabled) {
      self.tabLockingEnabled = tabLockingEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getTabLockingMetadata = function() {
      return self.tabLockingMetadata;
    }

    /**
     * @param {SettingsMetadata} tabLockingMetadata
     **/
    self.setTabLockingMetadata = function (tabLockingMetadata) {
      self.tabLockingMetadata = tabLockingMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSavingCustomTabsEnabled = function() {
      return self.savingCustomTabsEnabled;
    }

    /**
     * set 
     * @param {String} savingCustomTabsEnabled
     **/
    self.setSavingCustomTabsEnabled = function (savingCustomTabsEnabled) {
      self.savingCustomTabsEnabled = savingCustomTabsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getSavingCustomTabsMetadata = function() {
      return self.savingCustomTabsMetadata;
    }

    /**
     * @param {SettingsMetadata} savingCustomTabsMetadata
     **/
    self.setSavingCustomTabsMetadata = function (savingCustomTabsMetadata) {
      self.savingCustomTabsMetadata = savingCustomTabsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getTabTextFormattingEnabled = function() {
      return self.tabTextFormattingEnabled;
    }

    /**
     * set 
     * @param {String} tabTextFormattingEnabled
     **/
    self.setTabTextFormattingEnabled = function (tabTextFormattingEnabled) {
      self.tabTextFormattingEnabled = tabTextFormattingEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getTabTextFormattingMetadata = function() {
      return self.tabTextFormattingMetadata;
    }

    /**
     * @param {SettingsMetadata} tabTextFormattingMetadata
     **/
    self.setTabTextFormattingMetadata = function (tabTextFormattingMetadata) {
      self.tabTextFormattingMetadata = tabTextFormattingMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSharedCustomTabsEnabled = function() {
      return self.sharedCustomTabsEnabled;
    }

    /**
     * set 
     * @param {String} sharedCustomTabsEnabled
     **/
    self.setSharedCustomTabsEnabled = function (sharedCustomTabsEnabled) {
      self.sharedCustomTabsEnabled = sharedCustomTabsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getSharedCustomTabsMetadata = function() {
      return self.sharedCustomTabsMetadata;
    }

    /**
     * @param {SettingsMetadata} sharedCustomTabsMetadata
     **/
    self.setSharedCustomTabsMetadata = function (sharedCustomTabsMetadata) {
      self.sharedCustomTabsMetadata = sharedCustomTabsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getSenderToChangeTabAssignmentsEnabled = function() {
      return self.senderToChangeTabAssignmentsEnabled;
    }

    /**
     * set 
     * @param {String} senderToChangeTabAssignmentsEnabled
     **/
    self.setSenderToChangeTabAssignmentsEnabled = function (senderToChangeTabAssignmentsEnabled) {
      self.senderToChangeTabAssignmentsEnabled = senderToChangeTabAssignmentsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getSenderToChangeTabAssignmentsMetadata = function() {
      return self.senderToChangeTabAssignmentsMetadata;
    }

    /**
     * @param {SettingsMetadata} senderToChangeTabAssignmentsMetadata
     **/
    self.setSenderToChangeTabAssignmentsMetadata = function (senderToChangeTabAssignmentsMetadata) {
      self.senderToChangeTabAssignmentsMetadata = senderToChangeTabAssignmentsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getTabDataLabelEnabled = function() {
      return self.tabDataLabelEnabled;
    }

    /**
     * set 
     * @param {String} tabDataLabelEnabled
     **/
    self.setTabDataLabelEnabled = function (tabDataLabelEnabled) {
      self.tabDataLabelEnabled = tabDataLabelEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getTabDataLabelMetadata = function() {
      return self.tabDataLabelMetadata;
    }

    /**
     * @param {SettingsMetadata} tabDataLabelMetadata
     **/
    self.setTabDataLabelMetadata = function (tabDataLabelMetadata) {
      self.tabDataLabelMetadata = tabDataLabelMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getFirstLastEmailTabsEnabled = function() {
      return self.firstLastEmailTabsEnabled;
    }

    /**
     * set 
     * @param {String} firstLastEmailTabsEnabled
     **/
    self.setFirstLastEmailTabsEnabled = function (firstLastEmailTabsEnabled) {
      self.firstLastEmailTabsEnabled = firstLastEmailTabsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getFirstLastEmailTabsMetadata = function() {
      return self.firstLastEmailTabsMetadata;
    }

    /**
     * @param {SettingsMetadata} firstLastEmailTabsMetadata
     **/
    self.setFirstLastEmailTabsMetadata = function (firstLastEmailTabsMetadata) {
      self.firstLastEmailTabsMetadata = firstLastEmailTabsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getCalculatedFieldsEnabled = function() {
      return self.calculatedFieldsEnabled;
    }

    /**
     * set 
     * @param {String} calculatedFieldsEnabled
     **/
    self.setCalculatedFieldsEnabled = function (calculatedFieldsEnabled) {
      self.calculatedFieldsEnabled = calculatedFieldsEnabled;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getCalculatedFieldsMetadata = function() {
      return self.calculatedFieldsMetadata;
    }

    /**
     * @param {SettingsMetadata} calculatedFieldsMetadata
     **/
    self.setCalculatedFieldsMetadata = function (calculatedFieldsMetadata) {
      self.calculatedFieldsMetadata = calculatedFieldsMetadata;
    }
    
    /**
     * get 
     * @return {String}
     **/
    self.getAllowTabOrder = function() {
      return self.allowTabOrder;
    }

    /**
     * set 
     * @param {String} allowTabOrder
     **/
    self.setAllowTabOrder = function (allowTabOrder) {
      self.allowTabOrder = allowTabOrder;
    }
    
    /**
     * @return {SettingsMetadata}
     **/
    self.getAllowTabOrderMetadata = function() {
      return self.allowTabOrderMetadata;
    }

    /**
     * @param {SettingsMetadata} allowTabOrderMetadata
     **/
    self.setAllowTabOrderMetadata = function (allowTabOrderMetadata) {
      self.allowTabOrderMetadata = allowTabOrderMetadata;
    }
    

    self.toJson = function () {
      return JSON.stringify(self);
    }
  };

  if (module) {
    module.TabAccountSettings = TabAccountSettings;
  }

  return TabAccountSettings;
  
  
}));
