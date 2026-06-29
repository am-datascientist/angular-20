import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { Component } from '@angular/core';
import { SignalEx } from './components/signal-ex/signal-ex';

export const routes: Routes = [
    {
        path: 'admin',
        component:Admin
    },
    {
        path: 'control-flow-statment',
        component:ControlFlow
    },
    {
        path: 'databinding',
        component:DataBinding
    },
    {
        path: 'signal',
        component: SignalEx 
    }

];
