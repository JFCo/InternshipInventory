<script type="text/template" id="faculty-template">
<a href="javascript:void(0)" class="faculty-edit"><%= id %> - <%= first_name %> <%= last_name %></a> [<a href="javascript:void(0)" class="faculty-remove">Remove from Department</a>]
</script>

<script type="text/template" id="faculty-edit-dialog-template">
    <div id="faculty-edit-dialog">
        <p class="faculty-show-new">Please begin by entering a Banner ID.  If the faculty member exists within Internship Inventory, their data will be loaded automatically.</p>
        <p class="faculty-show-edit">Note: Changes to this faculty member will be applied to all internships and departments in which the member is involved.</p>
        <table>
            <tr>
                <th>Banner ID:</th>
                <td><input type="text" id="faculty-edit-id" class="faculty-show-new" value="<%=id%>"><span class="faculty-show-edit"><%=id%></span></td>
            </tr>
            <tr class="edit-more-data">
                <th>Username:</th>
                <td><input type="text" id="faculty-edit-username" value="<%=username%>"></td>
            </tr>
            <tr class="edit-more-data">
                <th>First Name:</th>
                <td><input type="text" id="faculty-edit-first_name" value="<%=first_name%>"></td>
            </tr>
            <tr class="edit-more-data">
                <th>Last Name:</th>
                <td><input type="text" id="faculty-edit-last_name" value="<%=last_name%>"></td>
            </tr>
            <tr class="edit-more-data">
                <th>Phone:</th>
                <td><input type="text" id="faculty-edit-phone" value="<%=phone%>"></td>
            </tr>
            <tr class="edit-more-data">
                <th>Fax:</th>
                <td><input type="text" id="faculty-edit-fax" value="<%=fax%>"></td>
            </tr>
            <tr class="edit-more-data">
                <th rowspan="2">Address:</th>
                <td><input type="text" id="faculty-edit-street_address1" value="<%=street_address1%>"></td>
            </tr>
            <tr class="edit-more-data">
                <td><input type="text" id="faculty-edit-street_address2" value="<%=street_address2%>"></td>
            </tr>
            <tr class="edit-more-data">
                <th>City:</th>
                <td><input type="text" id="faculty-edit-city" value="<%=city%>"></td>
            </tr>
            <tr class="edit-more-data">
                <th>State:</th>
                <td><input type="text" id="faculty-edit-state" value="<%=state%>"></td>
            </tr>
            <tr class="edit-more-data">
                <th>Zip:</th>
                <td><input type="text" id="faculty-edit-zip" value="<%=zip%>"></td>
            </tr>
        </table>
        <p class="loading-more-data" style="text-align: center; padding: 1em;"><img src="images/icons/default/ajax25.gif"></p>
        <p class="prompt-more-data">No faculty member with that ID exists within the system.</p>
        <p class="prompt-more-data" style="text-align: center"><input type="button" class="manual-entry" value="Enter Manually"></p>
    </div>
</script>

<script type="text/javascript">
$(function () {
    new FacultyManagementView();
});
</script>
