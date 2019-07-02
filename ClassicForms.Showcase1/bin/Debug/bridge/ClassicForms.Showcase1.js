/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2019
 * @compiler Bridge.NET 17.9.0
 */
Bridge.assembly("ClassicForms.Showcase1", function ($asm, globals) {
    "use strict";

    Bridge.define("ClassicForms.Showcase1.Program", {
        main: function Main () {
            System.Settings.UseNameForInputPlaceholders = true;

            var x = new ClassicForms.Showcase1.UI.frmLogin();
            x.Show();
        }
    });

    Bridge.define("ClassicForms.Showcase1.UI.frmLogin", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            /**
             * Required designer variable.
             *
             * @instance
             * @private
             * @memberof ClassicForms.Showcase1.UI.frmLogin
             * @type System.ComponentModel.IContainer
             */
            components: null,
            button1: null,
            txtUsername: null,
            txtPassword: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            Button1_Click: function (sender, e) {
                System.Windows.Forms.MessageBox.Show(System.String.format("Welcome {0}", [this.txtUsername.Text]));
            },
            /**
             * Clean up any resources being used.
             *
             * @instance
             * @protected
             * @override
             * @this ClassicForms.Showcase1.UI.frmLogin
             * @memberof ClassicForms.Showcase1.UI.frmLogin
             * @param   {boolean}    disposing    true if managed resources should be disposed; otherwise, false.
             * @return  {void}
             */
            Dispose$1: function (disposing) {
                if (disposing && (this.components != null)) {
                    this.components.System$IDisposable$Dispose();
                }
                System.Windows.Forms.Form.prototype.Dispose$1.call(this, disposing);
            },
            /**
             * Required method for Designer support - do not modify
             the contents of this method with the code editor.
             *
             * @instance
             * @private
             * @this ClassicForms.Showcase1.UI.frmLogin
             * @memberof ClassicForms.Showcase1.UI.frmLogin
             * @return  {void}
             */
            InitializeComponent: function () {
                this.button1 = new System.Windows.Forms.Button();
                this.txtUsername = new System.Windows.Forms.TextBox();
                this.txtPassword = new System.Windows.Forms.TextBox();
                this.SuspendLayout();
                this.button1.Location = new System.Drawing.Point.$ctor1(24, 151);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(305, 47);
                this.button1.TabIndex = 0;
                this.button1.Tag = "btn btn-primary";
                this.button1.Text = "Login";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.Button1_Click));
                this.txtUsername.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 18.0, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.txtUsername.Location = new System.Drawing.Point.$ctor1(24, 24);
                this.txtUsername.Name = "txtUsername";
                this.txtUsername.Size = new System.Drawing.Size.$ctor2(305, 35);
                this.txtUsername.TabIndex = 2;
                this.txtPassword.Font = new System.Drawing.Font.ctor("Microsoft Sans Serif", 18.0);
                this.txtPassword.Location = new System.Drawing.Point.$ctor1(24, 65);
                this.txtPassword.Name = "txtPassword";
                this.txtPassword.Size = new System.Drawing.Size.$ctor2(305, 35);
                this.txtPassword.TabIndex = 3;
                this.txtPassword.UseSystemPasswordChar = true;
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(354, 222);
                this.Controls.add(this.txtPassword);
                this.Controls.add(this.txtUsername);
                this.Controls.add(this.button1);
                this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
                this.MaximizeBox = false;
                this.MinimizeBox = false;
                this.Name = "frmLogin";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Text = "Please login";
                this.ResumeLayout$1(false);
                this.PerformLayout$1();

            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJDbGFzc2ljRm9ybXMuU2hvd2Nhc2UxLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJQcm9ncmFtLmNzIiwiLi4vQ2xhc3NpY0Zvcm1zLlNob3djYXNlMS5VSS9mcm1Mb2dpbi5EZXNpZ25lci5jcyIsIi4uL0NsYXNzaWNGb3Jtcy5TaG93Y2FzZTEuVUkvZnJtTG9naW4uY3MiXSwKICAibmFtZXMiOiBbIiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7WUFhWUE7O1lBRUFBLFFBQVFBLElBQUlBO1lBQ1pBOzs7Ozs7Ozs7Ozs7Ozs7d0JDVGtEQTs7Ozs7Ozs7O2dCQ1NsREE7Ozs7cUNBR3VCQSxRQUFlQTtnQkFFdENBLHFDQUFnQkEscUNBQTRCQTs7Ozs7Ozs7Ozs7OztpQ0RSaEJBO2dCQUU1QkEsSUFBSUEsYUFBYUEsQ0FBQ0EsbUJBQWNBO29CQUU1QkE7O2dCQUVKQSx5REFBYUE7Ozs7Ozs7Ozs7Ozs7Z0JBV2JBLGVBQWVBLElBQUlBO2dCQUNuQkEsbUJBQW1CQSxJQUFJQTtnQkFDdkJBLG1CQUFtQkEsSUFBSUE7Z0JBQ3ZCQTtnQkFJQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUE7Z0JBQ0FBLHNCQUFzQkEsQUFBd0JBO2dCQUk5Q0Esd0JBQXdCQSxJQUFJQSx5REFBaURBLGtDQUFrQ0EsbUNBQW1DQSxDQUFDQTtnQkFDbkpBLDRCQUE0QkEsSUFBSUE7Z0JBQ2hDQTtnQkFDQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUlBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkEsNEJBQTRCQSxJQUFJQTtnQkFDaENBO2dCQUNBQSx3QkFBd0JBLElBQUlBO2dCQUM1QkE7Z0JBQ0FBO2dCQUlBQSwyQkFBMkJBLElBQUlBO2dCQUMvQkEscUJBQXFCQTtnQkFDckJBLGtCQUFrQkEsSUFBSUE7Z0JBQ3RCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLGtCQUFrQkE7Z0JBQ2xCQSx1QkFBdUJBO2dCQUN2QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEscUJBQXFCQTtnQkFDckJBO2dCQUNBQTtnQkFDQUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgQ2xhc3NpY0Zvcm1zLlNob3djYXNlMS5VSTtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIENsYXNzaWNGb3Jtcy5TaG93Y2FzZTFcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFByb2dyYW1cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZXR0aW5ncy5Vc2VOYW1lRm9ySW5wdXRQbGFjZWhvbGRlcnMgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIHggPSBuZXcgZnJtTG9naW4oKTtcclxuICAgICAgICAgICAgeC5TaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBDbGFzc2ljRm9ybXMuU2hvd2Nhc2UxLlVJXHJcbntcclxuICAgIHBhcnRpYWwgY2xhc3MgZnJtTG9naW5cclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJlcXVpcmVkIGRlc2lnbmVyIHZhcmlhYmxlLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHJpdmF0ZSBTeXN0ZW0uQ29tcG9uZW50TW9kZWwuSUNvbnRhaW5lciBjb21wb25lbnRzID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBDbGVhbiB1cCBhbnkgcmVzb3VyY2VzIGJlaW5nIHVzZWQuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJkaXNwb3NpbmdcIj50cnVlIGlmIG1hbmFnZWQgcmVzb3VyY2VzIHNob3VsZCBiZSBkaXNwb3NlZDsgb3RoZXJ3aXNlLCBmYWxzZS48L3BhcmFtPlxyXG4gICAgICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIERpc3Bvc2UoYm9vbCBkaXNwb3NpbmcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoZGlzcG9zaW5nICYmIChjb21wb25lbnRzICE9IG51bGwpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLkRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYXNlLkRpc3Bvc2UoZGlzcG9zaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNyZWdpb24gV2luZG93cyBGb3JtIERlc2lnbmVyIGdlbmVyYXRlZCBjb2RlXHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVxdWlyZWQgbWV0aG9kIGZvciBEZXNpZ25lciBzdXBwb3J0IC0gZG8gbm90IG1vZGlmeVxyXG4gICAgICAgIC8vLyB0aGUgY29udGVudHMgb2YgdGhpcyBtZXRob2Qgd2l0aCB0aGUgY29kZSBlZGl0b3IuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwcml2YXRlIHZvaWQgSW5pdGlhbGl6ZUNvbXBvbmVudCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHh0VXNlcm5hbWUgPSBuZXcgU3lzdGVtLldpbmRvd3MuRm9ybXMuVGV4dEJveCgpO1xyXG4gICAgICAgICAgICB0aGlzLnR4dFBhc3N3b3JkID0gbmV3IFN5c3RlbS5XaW5kb3dzLkZvcm1zLlRleHRCb3goKTtcclxuICAgICAgICAgICAgdGhpcy5TdXNwZW5kTGF5b3V0KCk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyBidXR0b24xXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjQsIDE1MSk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5OYW1lID0gXCJidXR0b24xXCI7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5TaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMzA1LCA0Nyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWJJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uMS5UYWcgPSBcImJ0biBidG4tcHJpbWFyeVwiO1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbjEuVGV4dCA9IFwiTG9naW5cIjtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLlVzZVZpc3VhbFN0eWxlQmFja0NvbG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idXR0b24xLkNsaWNrICs9IG5ldyBTeXN0ZW0uRXZlbnRIYW5kbGVyKHRoaXMuQnV0dG9uMV9DbGljayk7XHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAvLyB0eHRVc2VybmFtZVxyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgdGhpcy50eHRVc2VybmFtZS5Gb250ID0gbmV3IFN5c3RlbS5EcmF3aW5nLkZvbnQoXCJNaWNyb3NvZnQgU2FucyBTZXJpZlwiLCAxOEYsIFN5c3RlbS5EcmF3aW5nLkZvbnRTdHlsZS5SZWd1bGFyLCBTeXN0ZW0uRHJhd2luZy5HcmFwaGljc1VuaXQuUG9pbnQsICgoYnl0ZSkoMCkpKTtcclxuICAgICAgICAgICAgdGhpcy50eHRVc2VybmFtZS5Mb2NhdGlvbiA9IG5ldyBTeXN0ZW0uRHJhd2luZy5Qb2ludCgyNCwgMjQpO1xyXG4gICAgICAgICAgICB0aGlzLnR4dFVzZXJuYW1lLk5hbWUgPSBcInR4dFVzZXJuYW1lXCI7XHJcbiAgICAgICAgICAgIHRoaXMudHh0VXNlcm5hbWUuU2l6ZSA9IG5ldyBTeXN0ZW0uRHJhd2luZy5TaXplKDMwNSwgMzUpO1xyXG4gICAgICAgICAgICB0aGlzLnR4dFVzZXJuYW1lLlRhYkluZGV4ID0gMjtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIHR4dFBhc3N3b3JkXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLnR4dFBhc3N3b3JkLkZvbnQgPSBuZXcgU3lzdGVtLkRyYXdpbmcuRm9udChcIk1pY3Jvc29mdCBTYW5zIFNlcmlmXCIsIDE4Rik7XHJcbiAgICAgICAgICAgIHRoaXMudHh0UGFzc3dvcmQuTG9jYXRpb24gPSBuZXcgU3lzdGVtLkRyYXdpbmcuUG9pbnQoMjQsIDY1KTtcclxuICAgICAgICAgICAgdGhpcy50eHRQYXNzd29yZC5OYW1lID0gXCJ0eHRQYXNzd29yZFwiO1xyXG4gICAgICAgICAgICB0aGlzLnR4dFBhc3N3b3JkLlNpemUgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZSgzMDUsIDM1KTtcclxuICAgICAgICAgICAgdGhpcy50eHRQYXNzd29yZC5UYWJJbmRleCA9IDM7XHJcbiAgICAgICAgICAgIHRoaXMudHh0UGFzc3dvcmQuVXNlU3lzdGVtUGFzc3dvcmRDaGFyID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgIC8vIGZybUxvZ2luXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICB0aGlzLkF1dG9TY2FsZURpbWVuc2lvbnMgPSBuZXcgU3lzdGVtLkRyYXdpbmcuU2l6ZUYoNkYsIDEzRik7XHJcbiAgICAgICAgICAgIHRoaXMuQXV0b1NjYWxlTW9kZSA9IFN5c3RlbS5XaW5kb3dzLkZvcm1zLkF1dG9TY2FsZU1vZGUuRm9udDtcclxuICAgICAgICAgICAgdGhpcy5DbGllbnRTaXplID0gbmV3IFN5c3RlbS5EcmF3aW5nLlNpemUoMzU0LCAyMjIpO1xyXG4gICAgICAgICAgICB0aGlzLkNvbnRyb2xzLkFkZCh0aGlzLnR4dFBhc3N3b3JkKTtcclxuICAgICAgICAgICAgdGhpcy5Db250cm9scy5BZGQodGhpcy50eHRVc2VybmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuQ29udHJvbHMuQWRkKHRoaXMuYnV0dG9uMSk7XHJcbiAgICAgICAgICAgIHRoaXMuRm9ybUJvcmRlclN0eWxlID0gU3lzdGVtLldpbmRvd3MuRm9ybXMuRm9ybUJvcmRlclN0eWxlLkZpeGVkU2luZ2xlO1xyXG4gICAgICAgICAgICB0aGlzLk1heGltaXplQm94ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuTWluaW1pemVCb3ggPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5OYW1lID0gXCJmcm1Mb2dpblwiO1xyXG4gICAgICAgICAgICB0aGlzLlN0YXJ0UG9zaXRpb24gPSBTeXN0ZW0uV2luZG93cy5Gb3Jtcy5Gb3JtU3RhcnRQb3NpdGlvbi5DZW50ZXJTY3JlZW47XHJcbiAgICAgICAgICAgIHRoaXMuVGV4dCA9IFwiUGxlYXNlIGxvZ2luXCI7XHJcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5b3V0KGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5QZXJmb3JtTGF5b3V0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLkJ1dHRvbiBidXR0b24xO1xyXG4gICAgICAgIHByaXZhdGUgU3lzdGVtLldpbmRvd3MuRm9ybXMuVGV4dEJveCB0eHRVc2VybmFtZTtcclxuICAgICAgICBwcml2YXRlIFN5c3RlbS5XaW5kb3dzLkZvcm1zLlRleHRCb3ggdHh0UGFzc3dvcmQ7XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uQ29tcG9uZW50TW9kZWw7XHJcbnVzaW5nIFN5c3RlbS5EYXRhO1xyXG51c2luZyBTeXN0ZW0uRHJhd2luZztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBTeXN0ZW0uV2luZG93cy5Gb3JtcztcclxuXHJcbm5hbWVzcGFjZSBDbGFzc2ljRm9ybXMuU2hvd2Nhc2UxLlVJXHJcbntcclxuICAgIHB1YmxpYyBwYXJ0aWFsIGNsYXNzIGZybUxvZ2luIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmcm1Mb2dpbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBJbml0aWFsaXplQ29tcG9uZW50KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgQnV0dG9uMV9DbGljayhvYmplY3Qgc2VuZGVyLCBFdmVudEFyZ3MgZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIE1lc3NhZ2VCb3guU2hvdyhzdHJpbmcuRm9ybWF0KFwiV2VsY29tZSB7MH1cIix0eHRVc2VybmFtZS5UZXh0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
