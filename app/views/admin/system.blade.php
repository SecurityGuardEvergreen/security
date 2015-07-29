
@extends('admin.indexf')


@section('content')
<section id="settings" class="current">
                <aside style="border-radius:0px;" class="panel primary">
                    <header>
                        <h1>system</h1>
                    </header>
                    <article class="nano">
                        <div class="nano-content overthrow">
                            <div class="display-table">
                                <div class="display-row is-flex">
                                    <ul class="nav nav-lg nav-secondary" id="nav-settings">
                                        <li>
                                            <a data-navigation="content" href="/admin/system/users" id="settings-account-nav" class="active">
                                                <i class="fa fa-user"></i>
                                                <i class="arrow"></i>
                                                Users
                                            </a>
                                        </li>
                                        <li>
                                            <a data-navigation="content" href="#">
                                                <i class="fa fa-users"></i>
                                                <i class="arrow"></i>
                                                Groups
                                            </a>
                                        </li>
                                        <li>
                                            <a data-navigation="content" href="#" id="settings-profile-nav" class="">
                                                <i class="fa fa-home"></i>
                                                <i class="arrow"></i>
                                                Zones
                                            </a>
                                        </li>
                                        <li>
                                            <a data-navigation="content" href="#" id="settings-devices-nav">
                                                <i class="fa fa-sitemap"></i>
                                                <i class="arrow"></i>
                                                Stations
                                            </a>
                                        </li>
                                        <li>
                                            <a data-navigation="content" href="#" id="settings-notification-nav" class="">
                                                <i class="fa fa-calendar"></i>
                                                <i class="arrow"></i>
                                                Schedule
                                            </a>
                                        </li>
                                        <li>
                                            <a data-navigation="content" href="#" id="settings-notification-nav" class="">
                                                <i class="fa fa-globe"></i>
                                                <i class="arrow"></i>
                                                Areas
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </article>

                </aside>

                <content class="secondary">
                    <section class="panel panel-page current" id="device-set">
                        <header class="panel-header">
                            <div class="page-content">

                                <a class="btn btn-back btn-hover js-back-to-aside" href="#">
                                    <i class="icon-back"></i>
                                </a>
                                <h1>
								<i class="fa fa-user"></i>
								Gestión de usuarios
								</h1>
                            </div>
                                                       
                        </header>
                        <article class="panel-body nano">
                            <div class="nano-content overthrow">

                                <!-- <div class="page-content"> -->
                                    <div class="page-section">
                            <!-- Breadcrumbs -->
                            @if($data->addUser)
                                <ol class="breadcrumb">
                                  <li>System</li>
                                  <li><a href="/admin/system/">Users</a></li>
                                  <li>Add</li>                                             
                                </ol>
                            @else
                             <ol class="breadcrumb">
                                  <li>System</li>
                                  <li><a href="/admin/system/">Users</a></li>                                            
                                </ol>                            
                            @endif
                            <!-- /Fin Breadcrumbs -->

                            @if($data->addUser)
                                <!-- Form user -->
                                {{ Form::open(array(
                                'url'  => 'add_user',
                                'method' => 'post', 
                                'class' => 'form-horizontal')) }}
                                    <div class="form-group">
                                        <label for="username" class="col-sm-1 control-label">Nickname</label>
                                        <div class="col-sm-3">
                                            {{Form::text('username',Input::old('username'),
                                            array('autofocus','class' => 'form-control','id' => 'username',
                                            'placeholder' => 'Ingrese su nombre de usuario')
                                            )}}
                                        </div>
                                        <label for="name" class="col-sm-1 control-label">Nombre</label>
                                        <div class="col-sm-4">
                                            {{Form::text('name',Input::old('name'),
                                            array('autofocus','class' => 'form-control','id' => 'name',
                                            'placeholder' => 'Ingrese su nombre')
                                            )}}
                                        </div> 
                                        <label for="ced" class="col-sm-1 control-label">Cédula</label>
                                        <div class="col-sm-2">
                                            {{Form::text('ced',Input::old('ced'),
                                            array('autofocus','class' => 'form-control','id' => 'ced',
                                            'placeholder' => 'Ingrese su cédula')
                                            )}}
                                        </div>  
                                    </div>
                                    <div class="form-group">
                                        <label for="telf" class="col-sm-1 control-label">Teléfono</label>
                                        <div class="col-sm-3">
                                            {{Form::text('telf',Input::old('telf'),
                                            array('autofocus','class' => 'form-control','id' => 'telf',
                                            'placeholder' => 'Ingrese su teléfono')
                                            )}}
                                        </div>                                          
                                        <label for="mail" class="col-sm-1 control-label">Correo electrónico</label>
                                        <div class="col-sm-7">
                                            {{Form::text('mail',Input::old('mail'),
                                            array('autofocus','class' => 'form-control','id' => 'mail',
                                            'placeholder' => 'Ingrese su correo electrónico')
                                            )}}
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="address" class="col-sm-1 control-label">Dirección</label>
                                        <div class="col-sm-11">
                                            {{Form::text('address',Input::old('address'),
                                            array('autofocus','class' => 'form-control','id' => 'address',
                                            'placeholder' => 'Ingrese su dirección')
                                            )}}
                                        </div>  
                                    </div>
                                    <div class="form-group">
                                        <label for="type_user" class="col-sm-1 control-label">Tipo de Usuario</label>
                                        <div class="col-sm-5">
                                           <select class="form-control" id="type_user" name="type_user">
                                                <option value="">Tipo de usuario</option>
                                                @foreach($data->type_user as $key => $type)
                                                    <option value="{{$type->id}}">{{ucfirst($type->name)}}</option>
                                                @endforeach
                                                                                                
                                            </select>
                                        </div>
                                        <label for="status" class="col-sm-1 control-label">Estatus</label>
                                        <div class="col-sm-5">
                                           <select class="form-control" id="status" name="status">
                                                <option value="">Estatus</option>
                                                <option value="1">Activo</option>
                                                <option value="0">Inactivo</option>
                                            </select>
                                        </div> 
                                    </div>
                                  <div class="form-group">
                                    <div class="col-sm-12 ">
                                      <button type="submit" class="btn btn-success center-block">Agregar usuario</button>
                                    </div>
                                  </div>
                                {{ Form::close() }}
                                <!-- /form user -->
                            @else

                            
                            <!-- Boton add user -->
                            <center style="margin-top:5px">
                                <a href="/admin/system/add_user" type="button" class="btn btn-success"><i class="fa fa-user-plus"></i> </a>
                            </center>
                            <!-- /Boton add user -->
                                       <!-- Tabla -->
                                       <div class="table-responsive ">
                        <!-- Fin tabla prueba -->
                        <table data-toggle="table"
                            data-url="/admin/data_user"
                            data-search="true"
                            data-show-refresh="true"
                            data-show-columns="true"
                            data-query-params="queryParams"
                            data-pagination="true"
                            data-classes="table table-hover"
                               >
                            <thead>
                            <tr>            
                                        <th data-field="name" data-sortable="true">NOMBRE</th>
                                        <th data-field="nickname" data-sortable="true">NICKNAME</th>
                                        <th data-field="telf" data-sortable="true">TELÉFONO PERSONAL</th>
                                        <th data-field="ext" data-sortable="true">Ext</th>
                                        <th class="col-xs-1" data-field="email" data-sortable="true">EMAIL</th>
                                        <th data-field="address" data-sortable="true">DIRECCIÓN</th>
                                        <th data-field="type" data-sortable="true">TIPO DE USUARIO</th>
                                    </tr>
                            </thead>
                        </table>

                        </div>
                                       <!-- /Tabla -->
                         @endif
                         <!-- End if addUser -->
                                    </div>
                                <!-- </div> -->
                            </div>
                        </article>

                    </section>

                </content>
            </section>
@stop